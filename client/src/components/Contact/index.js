import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Snackbar } from '@mui/material';

const Contact = () => {
  const [open, setOpen] = useState(false);
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      'service_4lpw8h4',
      // process.env.REACT_APP_SERVICE_ID, 
      // process.env.REACT_APP_TEMPLATE_ID, 
      'template_o7jcuc2',
      form.current, 
      // process.env.REACT_APP_USER_ID
      'sT4P-SCbPqdROClII'
    )
    .then(() => {
      setOpen(true);
      form.current.reset();
    }, (error) => {
      console.error(error.text);
    });
  };

  return (
    <div className="flex flex-col items-center justify-center relative z-0 px-4 py-8 md:px-6 md:py-12">
      <div className="relative flex flex-col items-center w-full max-w-2xl px-6 py-8 gap-6">
        <h1 className="text-4xl font-bold text-white mb-4 md:text-3xl">Contact</h1>
        <p className="text-lg text-gray-300 text-center mb-6 md:text-base">
          Feel free to reach out with any questions or opportunities!
        </p>
        <form ref={form} onSubmit={handleSubmit} className="w-full p-8 bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900 rounded-lg shadow-2xl space-y-4">
          <h2 className="text-2xl font-semibold text-white mb-4">Email Me 🚀</h2>
          <input
            type="email"
            name="from_email"
            placeholder="Your Email"
            className="w-full bg-gray-900 border border-gray-600 text-white py-3 px-4 rounded-lg focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-all"
            required
          />
          <input
            type="text"
            name="from_name"
            placeholder="Your Name"
            className="w-full bg-gray-900 border border-gray-600 text-white py-3 px-4 rounded-lg focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-all"
            required
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            className="w-full bg-gray-900 border border-gray-600 text-white py-3 px-4 rounded-lg focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-all"
            required
          />
          <textarea
            name="message"
            placeholder="Message"
            rows="4"
            className="w-full bg-gray-900 border border-gray-600 text-white py-3 px-4 rounded-lg focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-all"
            required
          />
          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold rounded-lg shadow-md hover:from-purple-700 hover:to-pink-600 transition-all duration-300"
          >
            Send
          </button>
        </form>
        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={() => setOpen(false)}
          message="Email sent successfully!"
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        />
      </div>
    </div>
  );
};

export default Contact;
