import React from 'react';

const Contacts = () => {
  return (
    <section id="contact" className="bg-gray-100 py-16 px-6 md:px-20">
      <h2 className="text-4xl font-serif text-center text-[#4B2E2B] mb-12">Contact Us</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold text-[#4B2E2B] mb-6">Get In Touch</h3>
          <form action="#" method="POST">
            <div className="mb-4">
              <label htmlFor="name" className="block text-lg font-medium text-gray-700">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full p-3 mt-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#4B2E2B]"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-lg font-medium text-gray-700">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full p-3 mt-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#4B2E2B]"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-lg font-medium text-gray-700">Your Message</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="w-full p-3 mt-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#4B2E2B]"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-3 px-6 bg-[#4B2E2B] text-white font-semibold rounded-lg hover:bg-[#7B4D4D] transition-colors duration-300"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Information */}
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold text-[#4B2E2B] mb-6">Our Contact Info</h3>
          <p className="text-lg text-gray-700 mb-4">Feel free to reach out to us through the following channels:</p>
          <ul className="space-y-4">
            <li className="flex items-center">
              <svg className="w-5 h-5 text-[#4B2E2B]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 2a6 6 0 00-6 6v9a6 6 0 006 6h6M16 2v6m0-6h-6a6 6 0 00-6 6v9a6 6 0 006 6h6m-6-6h6"></path>
              </svg>
              <span className="ml-3">info@yourdomain.com</span>
            </li>
            <li className="flex items-center">
              <svg className="w-5 h-5 text-[#4B2E2B]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.5 4.5h19M2.5 12.5h19M2.5 20.5h19"></path>
              </svg>
              <span className="ml-3">+92-312-3456789</span>
            </li>
            <li className="flex items-center">
              <svg className="w-5 h-5 text-[#4B2E2B]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 21V9h6v12m3-7l3 3-3 3m-6-9l-3-3 3-3"></path>
              </svg>
              <span className="ml-3">
                <a
                  href="https://www.google.com/maps?q=Karachi,+Pakistan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#4B2E2B] hover:underline"
                >
                  1234 Business Address, Karachi, Pakistan
                </a>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
