import React from 'react';
import { motion } from 'framer-motion';
import { User, Award, Target, Zap } from 'lucide-react';
import { personalInfo } from '../mock';

const About = () => {
  const stats = [
    { icon: Award, label: 'Projects Completed', value: '15+' },
    { icon: Target, label: 'Client Satisfaction', value: '100%' },
    { icon: Zap, label: 'Technologies', value: '20+' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="about" className="py-20 bg-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <p className="text-gray-400 text-lg">Get to know me better</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image/Icon */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative">
              {/* Glassmorphism Card with Icon */}
              <div className="relative bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-xl border border-cyan-500/30 rounded-3xl p-12 shadow-2xl shadow-cyan-500/20">
                <motion.div
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  className="flex items-center justify-center"
                >
                  <User className="text-cyan-400" size={200} strokeWidth={1} />
                </motion.div>
                
                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 w-20 h-20 bg-cyan-400/20 rounded-full blur-2xl"></div>
                <div className="absolute bottom-4 left-4 w-20 h-20 bg-blue-400/20 rounded-full blur-2xl"></div>
              </div>

              {/* Floating Badge */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-6 -right-6 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-3 rounded-full font-bold shadow-lg shadow-cyan-500/50"
              >
                MCA Graduate
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <motion.div variants={itemVariants}>
              <h3 className="text-3xl font-bold text-white mb-4">
                Passionate Developer & Problem Solver
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {personalInfo.bio}
              </p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h4 className="text-xl font-semibold text-cyan-400 mb-3">What I Do</h4>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                  Build responsive and interactive web applications
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                  Develop scalable backend systems and APIs
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                  Implement machine learning solutions
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                  Collaborate with teams to deliver quality products
                </li>
              </ul>
            </motion.div>

            {/* Stats */}
            <motion.div variants={itemVariants} className="grid grid-cols-3 gap-4 pt-4">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="bg-white/5 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-4 text-center"
                  >
                    <Icon className="text-cyan-400 mx-auto mb-2" size={24} />
                    <p className="text-2xl font-bold text-white">{stat.value}</p>
                    <p className="text-xs text-gray-400 mt-1">{stat.label}</p>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;