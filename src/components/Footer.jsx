import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa'; // Importing Font Awesome icons

const Footer = () => {
  return (
    <footer className="bg-[#4B2E2B] text-white py-8 px-6 md:px-20">
      <div className="container mx-auto text-center">
        {/* Logo or Business Name */}
        <div className="mb-6">
          <h2 className="text-3xl font-semibold">Brew & Bean</h2>
        </div>

        {/* Navigation Links */}
        <div className="space-x-6 mb-6">
          <a href="#home" className="text-lg hover:text-[#f8b400] transition-colors">Home</a>
          <a href="#about" className="text-lg hover:text-[#f8b400] transition-colors">About</a>
          <a href="#services" className="text-lg hover:text-[#f8b400] transition-colors">Services</a>
          <a href="#contact" className="text-lg hover:text-[#f8b400] transition-colors">Contact</a>
        </div>

        {/* Social Media Links */}
        <div className="space-x-6 mb-6">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="w-6 h-6 inline-block text-white hover:text-[#f8b400] transition-colors" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="w-6 h-6 inline-block text-white hover:text-[#f8b400] transition-colors" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="w-6 h-6 inline-block text-white hover:text-[#f8b400] transition-colors" />
          </a>
        </div>

        {/* Copyright Notice */}
        <p className="text-sm">© {new Date().getFullYear()} Brew & Bean. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
