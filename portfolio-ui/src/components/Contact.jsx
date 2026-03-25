import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('idle'); // idle, loading, success, error

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('http://localhost:8081/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' }); // Clear the form
        setTimeout(() => setStatus('idle'), 5000); // Reset UI after 5 seconds
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-24 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="mb-16 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-blue-600 rounded mx-auto md:mx-0"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Contact Information Side */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
              Let's talk about your next project.
            </h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Whether you have a question, a freelance opportunity, or just want to say hi, I'll try my best to get back to you!
            </p>
            
            <div className="space-y-4 pt-4">
              <div className="flex items-center gap-4 text-gray-600 dark:text-gray-300">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                <span>pravalikamesa@gmail.com</span>
              </div>
              <div className="flex items-center gap-4 text-gray-600 dark:text-gray-300">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                <span>Hyderabad, India</span>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700">
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none resize-none"
                  placeholder="How can I help you?"
                ></textarea>
              </div>

              <button 
                type="submit" 
                disabled={status === 'loading'}
                className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg flex justify-center items-center"
              >
                {status === 'loading' ? 'Sending...' : 'Send Message'}
              </button>

              {/* Status Messages */}
              {status === 'success' && (
                <p className="text-green-600 dark:text-green-400 text-sm font-medium text-center mt-4">
                  Message sent successfully! I'll be in touch soon.
                </p>
              )}
              {status === 'error' && (
                <p className="text-red-600 dark:text-red-400 text-sm font-medium text-center mt-4">
                  Oops! Something went wrong. Please try again.
                </p>
              )}

            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;