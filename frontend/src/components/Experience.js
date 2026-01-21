import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, TrendingUp, Award, Users } from 'lucide-react';
import { experience } from '../mock';

const Experience = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };

  const cardColors = [
    { bg: 'from-cyan-500/10 to-blue-500/10', border: 'border-cyan-500/40', accent: 'bg-cyan-500', text: 'text-cyan-400', glow: 'shadow-cyan-500/20' },
    { bg: 'from-blue-500/10 to-purple-500/10', border: 'border-blue-500/40', accent: 'bg-blue-500', text: 'text-blue-400', glow: 'shadow-blue-500/20' },
    { bg: 'from-purple-500/10 to-pink-500/10', border: 'border-purple-500/40', accent: 'bg-purple-500', text: 'text-purple-400', glow: 'shadow-purple-500/20' }
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>

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
              Work Experience
            </span>
          </h2>
          <p className="text-gray-400 text-lg">My professional journey and achievements</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8"
        >
          {experience.map((exp, index) => {
            const colors = cardColors[index % cardColors.length];
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={exp.id}
                variants={itemVariants}
                className="relative"
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className={`bg-gradient-to-br ${colors.bg} backdrop-blur-xl border-2 ${colors.border} rounded-3xl overflow-hidden shadow-2xl ${colors.glow} hover:shadow-3xl transition-all duration-300`}
                >
                  <div className="grid md:grid-cols-3 gap-6 p-8">
                    {/* Left Section - Company & Role Info */}
                    <div className="md:col-span-1 space-y-4">
                      {/* Company Badge */}
                      <motion.div
                        whileHover={{ rotate: [0, -5, 5, 0] }}
                        transition={{ duration: 0.5 }}
                        className="relative"
                      >
                        <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl ${colors.accent} shadow-lg`}>
                          <Briefcase className="text-white" size={32} />
                        </div>
                        <motion.div
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className={`absolute -top-1 -right-1 w-6 h-6 ${colors.accent} rounded-full border-4 border-gray-900`}
                        />
                      </motion.div>

                      {/* Role & Company */}
                      <div>
                        <h3 className={`text-2xl font-bold ${colors.text} mb-2`}>
                          {exp.title}
                        </h3>
                        <p className="text-white font-semibold text-lg mb-1">{exp.company}</p>
                      </div>

                      {/* Meta Info */}
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-gray-400">
                          <Calendar size={16} className={colors.text} />
                          <span className="text-sm">{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-400">
                          <MapPin size={16} className={colors.text} />
                          <span className="text-sm">{exp.location}</span>
                        </div>
                      </div>

                      {/* Stats */}
                      <div className="pt-4 border-t border-gray-700">
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          className="bg-white/5 rounded-xl p-3 backdrop-blur-sm"
                        >
                          <div className="flex items-center gap-2 mb-1">
                            <TrendingUp className={colors.text} size={18} />
                            <span className="text-xs text-gray-400">Key Impact</span>
                          </div>
                          <p className="text-white font-bold">{exp.achievements.length} Major Achievements</p>
                        </motion.div>
                      </div>
                    </div>

                    {/* Right Section - Description & Achievements */}
                    <div className="md:col-span-2 space-y-6">
                      {/* Description */}
                      <div>
                        <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                          <Users size={16} />
                          Role Overview
                        </h4>
                        <p className="text-gray-300 leading-relaxed">{exp.description}</p>
                      </div>

                      {/* Achievements */}
                      <div>
                        <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4 flex items-center gap-2">
                          <Award size={16} />
                          Key Achievements
                        </h4>
                        <div className="space-y-3">
                          {exp.achievements.map((achievement, idx) => (
                            <motion.div
                              key={idx}
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: idx * 0.1 }}
                              whileHover={{ x: 10, scale: 1.02 }}
                              className="flex items-start gap-3 p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-all group"
                            >
                              <div className={`mt-1 w-6 h-6 rounded-full ${colors.accent} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                                <motion.div
                                  animate={{ rotate: [0, 360] }}
                                  transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                                  className="w-2 h-2 bg-white rounded-full"
                                />
                              </div>
                              <p className="text-gray-300 group-hover:text-white transition-colors">
                                {achievement}
                              </p>
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      {/* Skills Tags */}
                      <div className="pt-4 border-t border-gray-700">
                        <div className="flex flex-wrap gap-2">
                          {['Leadership', 'Team Collaboration', 'Innovation', 'Problem Solving'].map((tag, idx) => (
                            <motion.span
                              key={idx}
                              initial={{ opacity: 0, scale: 0 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              viewport={{ once: true }}
                              transition={{ delay: idx * 0.1 }}
                              whileHover={{ scale: 1.1, rotate: 3 }}
                              className={`px-3 py-1 bg-gradient-to-r ${colors.bg} border ${colors.border} rounded-full text-xs ${colors.text} font-semibold`}
                            >
                              {tag}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Decorative Corner Elements */}
                  <div className={`absolute top-0 right-0 w-32 h-32 ${colors.accent} opacity-10 rounded-bl-full`} />
                  <div className={`absolute bottom-0 left-0 w-24 h-24 ${colors.accent} opacity-10 rounded-tr-full`} />
                </motion.div>

                {/* Connecting Line (except for last item) */}
                {index < experience.length - 1 && (
                  <motion.div
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className={`hidden md:block absolute left-1/2 -translate-x-1/2 w-1 h-8 ${colors.accent} opacity-30`}
                    style={{ top: '100%', transformOrigin: 'top' }}
                  />
                )}
              </motion.div>
            );
          })}
        </motion.div>

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {[
            { label: 'Years of Experience', value: '2+', icon: Calendar },
            { label: 'Companies Worked', value: experience.length, icon: Briefcase },
            { label: 'Total Achievements', value: experience.reduce((acc, exp) => acc + exp.achievements.length, 0), icon: Award }
          ].map((stat, index) => {
            const Icon = stat.icon;
            const colors = cardColors[index];
            return (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -5 }}
                className={`bg-gradient-to-br ${colors.bg} backdrop-blur-xl border ${colors.border} rounded-2xl p-6 text-center shadow-lg ${colors.glow}`}
              >
                <Icon className={`${colors.text} mx-auto mb-3`} size={32} />
                <p className="text-4xl font-bold text-white mb-2">{stat.value}</p>
                <p className="text-gray-400">{stat.label}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;