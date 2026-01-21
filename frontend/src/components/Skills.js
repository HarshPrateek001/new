import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, Server, Brain, Wrench, ChevronRight, Zap } from 'lucide-react';
import { skills } from '../mock';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  const categoryIcons = {
    'Frontend Development': Code,
    'Backend Development': Server,
    'AI & Machine Learning': Brain,
    'Tools & Technologies': Wrench
  };

  const categoryColors = {
    'Frontend Development': { bg: 'from-cyan-500/20 to-blue-500/20', border: 'border-cyan-500/40', text: 'text-cyan-400', glow: 'shadow-cyan-500/50' },
    'Backend Development': { bg: 'from-blue-500/20 to-purple-500/20', border: 'border-blue-500/40', text: 'text-blue-400', glow: 'shadow-blue-500/50' },
    'AI & Machine Learning': { bg: 'from-purple-500/20 to-pink-500/20', border: 'border-purple-500/40', text: 'text-purple-400', glow: 'shadow-purple-500/50' },
    'Tools & Technologies': { bg: 'from-emerald-500/20 to-cyan-500/20', border: 'border-emerald-500/40', text: 'text-emerald-400', glow: 'shadow-emerald-500/50' }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: 'easeOut' }
    },
    exit: {
      opacity: 0,
      x: 30,
      transition: { duration: 0.3 }
    }
  };

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>

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
          <p className="text-gray-400 text-lg">Mastering technologies to build exceptional solutions</p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Category Navigation */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-4"
          >
            {skills.map((skillCategory, index) => {
              const Icon = categoryIcons[skillCategory.category];
              const colors = categoryColors[skillCategory.category];
              const isActive = activeCategory === index;

              return (
                <motion.button
                  key={skillCategory.id}
                  onClick={() => setActiveCategory(index)}
                  whileHover={{ scale: 1.02, x: 10 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full text-left p-6 rounded-2xl border-2 transition-all duration-300 ${
                    isActive
                      ? `bg-gradient-to-r ${colors.bg} ${colors.border} ${colors.glow} shadow-2xl`
                      : 'bg-white/5 border-gray-700 hover:border-gray-600'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <motion.div
                        animate={isActive ? { rotate: [0, 360], scale: [1, 1.1, 1] } : {}}
                        transition={{ duration: 0.5 }}
                        className={`p-3 rounded-xl ${
                          isActive ? `bg-gradient-to-br ${colors.bg}` : 'bg-gray-800'
                        }`}
                      >
                        <Icon className={isActive ? colors.text : 'text-gray-400'} size={24} />
                      </motion.div>
                      <div>
                        <h3 className={`font-bold text-lg ${
                          isActive ? colors.text : 'text-gray-300'
                        }`}>
                          {skillCategory.category}
                        </h3>
                        <p className="text-gray-500 text-sm">
                          {skillCategory.items.length} skills
                        </p>
                      </div>
                    </div>
                    <motion.div
                      animate={isActive ? { x: [0, 5, 0] } : {}}
                      transition={{ duration: 1, repeat: Infinity }}
                    >
                      <ChevronRight className={isActive ? colors.text : 'text-gray-600'} size={24} />
                    </motion.div>
                  </div>

                  {/* Mini Progress Preview */}
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-4 pt-4 border-t border-gray-700"
                    >
                      <div className="flex items-center gap-2">
                        <Zap className={colors.text} size={16} />
                        <span className="text-sm text-gray-400">Active Category</span>
                      </div>
                    </motion.div>
                  )}
                </motion.button>
              );
            })}
          </motion.div>

          {/* Skills Display */}
          <div className="lg:col-span-3">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="space-y-6"
              >
                {/* Category Header */}
                <motion.div
                  variants={itemVariants}
                  className={`p-6 rounded-2xl bg-gradient-to-r ${categoryColors[skills[activeCategory].category].bg} border ${categoryColors[skills[activeCategory].category].border} backdrop-blur-xl`}
                >
                  <h3 className={`text-2xl font-bold ${categoryColors[skills[activeCategory].category].text} mb-2`}>
                    {skills[activeCategory].category}
                  </h3>
                  <p className="text-gray-400">Proficiency in key technologies</p>
                </motion.div>

                {/* Skills Grid with Circular Progress */}
                <div className="grid sm:grid-cols-2 gap-4">
                  {skills[activeCategory].items.map((skill, index) => {
                    const colors = categoryColors[skills[activeCategory].category];
                    const circumference = 2 * Math.PI * 45;
                    const offset = circumference - (skill.level / 100) * circumference;

                    return (
                      <motion.div
                        key={index}
                        variants={itemVariants}
                        whileHover={{ scale: 1.05, y: -5 }}
                        className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-gray-700 rounded-xl p-6 hover:border-gray-600 transition-all"
                      >
                        <div className="flex items-center gap-4">
                          {/* Circular Progress */}
                          <div className="relative w-20 h-20">
                            <svg className="transform -rotate-90 w-20 h-20">
                              {/* Background Circle */}
                              <circle
                                cx="40"
                                cy="40"
                                r="35"
                                stroke="currentColor"
                                strokeWidth="6"
                                fill="none"
                                className="text-gray-800"
                              />
                              {/* Progress Circle */}
                              <motion.circle
                                cx="40"
                                cy="40"
                                r="35"
                                stroke="currentColor"
                                strokeWidth="6"
                                fill="none"
                                strokeLinecap="round"
                                className={colors.text}
                                initial={{ strokeDashoffset: circumference }}
                                animate={{ strokeDashoffset: offset }}
                                transition={{ duration: 1, delay: index * 0.1, ease: 'easeOut' }}
                                style={{
                                  strokeDasharray: circumference,
                                  filter: 'drop-shadow(0 0 6px currentColor)'
                                }}
                              />
                            </svg>
                            {/* Percentage Text */}
                            <div className="absolute inset-0 flex items-center justify-center">
                              <motion.span
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.1 + 0.5, duration: 0.3 }}
                                className={`text-sm font-bold ${colors.text}`}
                              >
                                {skill.level}%
                              </motion.span>
                            </div>
                          </div>

                          {/* Skill Info */}
                          <div className="flex-1">
                            <h4 className="text-lg font-semibold text-white mb-1">{skill.name}</h4>
                            <div className="flex items-center gap-2">
                              <div className="flex-1 h-1.5 bg-gray-800 rounded-full overflow-hidden">
                                <motion.div
                                  initial={{ width: 0 }}
                                  animate={{ width: `${skill.level}%` }}
                                  transition={{ duration: 1, delay: index * 0.1, ease: 'easeOut' }}
                                  className={`h-full bg-gradient-to-r ${colors.bg.replace('/20', '/100')}`}
                                  style={{
                                    boxShadow: `0 0 10px currentColor`
                                  }}
                                />
                              </div>
                            </div>
                            <p className="text-xs text-gray-500 mt-1">
                              {skill.level >= 85 ? 'Expert' : skill.level >= 70 ? 'Advanced' : 'Intermediate'}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;