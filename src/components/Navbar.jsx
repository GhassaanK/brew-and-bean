import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from '../logo.png';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleMenu = () => setMobileOpen(!mobileOpen);

  const navLinks = [
    { label: 'Home', href: '#' },
    { label: 'About Us', href: '#about' },
    { label: 'Menu', href: '#menu' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <div className='sticky top-0 z-50 backdrop-blur bg-[#4B2E2B]/90 text-[#EADDC8] shadow-lg'>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">

        <a href="#" className='flex items-center gap-2 text-xl sm:text-3xl font-semibold'>
          <img src={Logo} alt="Brand" className='w-10 rounded-full shadow-md' />
          Brew & Bean Café
        </a>


        <ul className='hidden sm:flex gap-6 font-medium'>
          {navLinks.map(link => (
            <li key={link.href}>
              <a
                href={link.href}
                className='inline-block px-4 py-2 rounded hover:bg-[#FFFFFF] hover:text-[#1C1C1C] transition-all duration-300'
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>


        <div className="sm:hidden">
          {mobileOpen ? (
            <X size={28} onClick={toggleMenu} className="cursor-pointer" />
          ) : (
            <Menu size={28} onClick={toggleMenu} className="cursor-pointer" />
          )}
        </div>
      </div>


      <div
        className={`sm:hidden transition-all duration-300 ease-in-out ${
          mobileOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        } px-4 bg-[#4B2E2B]/95`}
      >
        <ul className="flex flex-col gap-4 py-4 font-medium">
          {navLinks.map(link => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className='block px-2 py-2 rounded hover:bg-[#FFFFFF] hover:text-[#1C1C1C] transition-all duration-200'
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
