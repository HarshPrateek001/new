import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, Github, Linkedin, Twitter } from 'lucide-react';
import { personalInfo } from '../mock';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-black/80 backdrop-blur-lg border-b border-cyan-500/20 shadow-lg shadow-cyan-500/10'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.a
            href="#home"
            onClick={(e) => scrollToSection(e, '#home')}
            className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            &lt;Harsh /&gt;
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 relative group"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
              </motion.a>
            ))}
          </div>

          {/* Social Links */}
          <div className="hidden md:flex items-center space-x-4">
            <motion.a
              href={personalInfo.social.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 360 }}
              transition={{ duration: 0.3 }}
              className="text-gray-400 hover:text-cyan-400"
            >
              <Github size={20} />
            </motion.a>
            <motion.a
              href={personalInfo.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 360 }}
              transition={{ duration: 0.3 }}
              className="text-gray-400 hover:text-cyan-400"
            >
              <Linkedin size={20} />
            </motion.a>
            <motion.a
              href={personalInfo.social.twitter}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 360 }}
              transition={{ duration: 0.3 }}
              className="text-gray-400 hover:text-cyan-400"
            >
              <Twitter size={20} />
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-cyan-400"
            whileTap={{ scale: 0.9 }}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-black/95 backdrop-blur-lg border-t border-cyan-500/20"
        >
          <div className="px-4 pt-2 pb-4 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className="block px-3 py-2 text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 rounded-lg transition-colors duration-300"
              >
                {item.name}
              </a>
            ))}
            <div className="flex items-center space-x-4 px-3 pt-4">
              <a
                href={personalInfo.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-400"
              >
                <Github size={20} />
              </a>
              <a
                href={personalInfo.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-400"
              >
                <Linkedin size={20} />
              </a>
              <a
                href={personalInfo.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-400"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;