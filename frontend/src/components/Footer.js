import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import { personalInfo } from '../mock';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-cyan-500/20 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-gray-400 text-sm flex items-center gap-2"
          >
            © {currentYear} {personalInfo.name}. Made with
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <Heart className="text-cyan-400 fill-cyan-400" size={16} />
            </motion.span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex gap-6"
          >
            <a href="#home" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
              Home
            </a>
            <a href="#about" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
              About
            </a>
            <a href="#projects" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
              Projects
            </a>
            <a href="#contact" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
              Contact
            </a>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;