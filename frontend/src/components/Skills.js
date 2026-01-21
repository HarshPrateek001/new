import React from 'react';
import { motion } from 'framer-motion';
import { Code, Server, Brain, Wrench } from 'lucide-react';
import { skills } from '../mock';

const Skills = () => {
  const categoryIcons = {
    'Frontend Development': Code,
    'Backend Development': Server,
    'AI & Machine Learning': Brain,
    'Tools & Technologies': Wrench
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: 'easeOut' }
    }
  };

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>

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
              Skills & Expertise
            </span>
          </h2>
          <p className="text-gray-400 text-lg">Technologies I work with</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8"
        >
          {skills.map((skillCategory) => {
            const Icon = categoryIcons[skillCategory.category];
            return (
              <motion.div
                key={skillCategory.id}
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-cyan-500/30 rounded-2xl p-6 shadow-2xl shadow-cyan-500/10"
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-cyan-500/20 rounded-lg">
                    <Icon className="text-cyan-400" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-white">{skillCategory.category}</h3>
                </div>

                {/* Skills List */}
                <div className="space-y-4">
                  {skillCategory.items.map((skill, index) => (
                    <div key={index}>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-300 font-medium">{skill.name}</span>
                        <span className="text-cyan-400 font-semibold">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: index * 0.1, ease: 'easeOut' }}
                          className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full relative"
                        >
                          <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                        </motion.div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;