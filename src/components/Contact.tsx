import React, { useState, useRef } from 'react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    
    try {
      if (!formRef.current) {
        throw new Error('Form reference not found');
      }

      // Log form data for debugging
      const formData = new FormData(formRef.current);
      console.log('Form data:', Object.fromEntries(formData));

      // Verify all required fields are present
      const requiredFields = ['user_name', 'email', 'subject', 'message'];
      const missingFields = requiredFields.filter(field => !formData.get(field));
      
      if (missingFields.length > 0) {
        throw new Error(`Missing required fields: ${missingFields.join(', ')}`);
      }

      const result = await emailjs.sendForm(
        'service_rgr4jun',
        'template_vle8x1l',
        formRef.current
      );

      console.log('EmailJS result:', result);
      
      if (result.status === 200) {
        setSubmitted(true);
        formRef.current.reset();
        
        setTimeout(() => {
          setSubmitted(false);
        }, 5000);
      } else {
        throw new Error(`Failed to send email: ${result.text}`);
      }
    } catch (err) {
      console.error('EmailJS error:', err);
      if (err instanceof Error) {
        setError(`Failed to send message: ${err.message}`);
      } else {
        setError('Failed to send message. Please try again later.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section 
      id="contact" 
      className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm uppercase tracking-widest text-blue-600 dark:text-blue-400 font-medium mb-2">
            Get In Touch
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
            Let's Work Together
          </h3>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
            Have a project in mind or want to discuss potential opportunities? 
            I'm always open to new ideas and collaborations. Reach out and let's create something amazing.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center max-w-5xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
            <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-6">Contact Information</h4>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="mr-4 p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-blue-600 dark:text-blue-400">
                  <Mail size={20} />
                </div>
                <div>
                  <h5 className="font-semibold text-gray-800 dark:text-white">Email</h5>
                  <a 
                    href="mailto:kr.saurabh297@gmail.com" 
                    className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    kr.saurabh297@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-blue-600 dark:text-blue-400">
                  <Phone size={20} />
                </div>
                <div>
                  <h5 className="font-semibold text-gray-800 dark:text-white">Phone</h5>
                  <a 
                    href="tel:+918218895936" 
                    className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    +91 8218895936
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-blue-600 dark:text-blue-400">
                  <MapPin size={20} />
                </div>
                <div>
                  <h5 className="font-semibold text-gray-800 dark:text-white">Location</h5>
                  <p className="text-gray-600 dark:text-gray-300">
                    Roorkee India
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-10">
              <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Office Hours</h4>
              <table className="w-full text-gray-600 dark:text-gray-300">
                <tbody>
                  <tr>
                    <td className="py-2 font-medium">Monday - Friday</td>
                    <td className="py-2">9:00 AM - 6:00 PM</td>
                  </tr>
                  <tr>
                    <td className="py-2 font-medium">Saturday</td>
                    <td className="py-2">10:00 AM - 4:00 PM</td>
                  </tr>
                  <tr>
                    <td className="py-2 font-medium">Sunday</td>
                    <td className="py-2">Closed</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
          <div>
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="user_name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Your Name
                </label>
                <input 
                  type="text" 
                  id="user_name" 
                  name="user_name"
                  required
                  className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800 dark:text-white"
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Your Email
                </label>
                <input 
                  type="email" 
                  id="email" 
                  name="email"
                  required
                  className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800 dark:text-white"
                  placeholder="hello@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Subject
                </label>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject"
                  required
                  className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800 dark:text-white"
                  placeholder="Project Inquiry"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Message
                </label>
                <textarea 
                  id="message" 
                  name="message"
                  required
                  rows={4}
                  className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800 dark:text-white resize-none"
                  placeholder="I'd like to discuss a project..."
                ></textarea>
              </div>
              
              {error && (
                <div className="p-3 bg-red-100 text-red-700 rounded-lg">
                  {error}
                </div>
              )}
              
              {submitted && (
                <div className="p-3 bg-green-100 text-green-700 rounded-lg">
                  Thank you! Your message has been sent successfully.
                </div>
              )}
              
              <button 
                type="submit" 
                disabled={isSubmitting || submitted}
                className={`w-full px-6 py-3 flex items-center justify-center rounded-lg font-medium text-white transition-all duration-300 ${
                  isSubmitting || submitted 
                    ? 'bg-gray-400 cursor-not-allowed' 
                    : 'bg-blue-600 hover:bg-blue-700 hover:shadow-lg'
                }`}
              >
                {isSubmitting ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center">
                    <Send size={18} className="mr-2" />
                    Send Message
                  </span>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;