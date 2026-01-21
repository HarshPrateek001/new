import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Sparkles, Code2, Cpu } from 'lucide-react';
import { personalInfo } from '../mock';

const Hero = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    const particleCount = 100;

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.radius = Math.random() * 2;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(6, 182, 212, 0.5)';
        ctx.fill();
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach((particle, i) => {
        particle.update();
        particle.draw();

        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[j].x - particle.x;
          const dy = particles[j].y - particle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(6, 182, 212, ${0.2 * (1 - distance / 100)})`;
            ctx.lineWidth = 1;
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      });

      requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-black via-gray-900 to-black">
      {/* Animated Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0"
      />

      {/* Gradient Orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        {/* Floating Icons */}
        <motion.div
          className="flex justify-center gap-8 mb-8"
          variants={itemVariants}
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="p-3 bg-cyan-500/10 backdrop-blur-sm rounded-lg border border-cyan-500/30"
          >
            <Code2 className="text-cyan-400" size={32} />
          </motion.div>
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
            className="p-3 bg-cyan-500/10 backdrop-blur-sm rounded-lg border border-cyan-500/30"
          >
            <Cpu className="text-cyan-400" size={32} />
          </motion.div>
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}
            className="p-3 bg-cyan-500/10 backdrop-blur-sm rounded-lg border border-cyan-500/30"
          >
            <Sparkles className="text-cyan-400" size={32} />
          </motion.div>
        </motion.div>

        {/* Greeting */}
        <motion.div variants={itemVariants} className="mb-4">
          <span className="inline-block px-4 py-2 bg-cyan-500/10 backdrop-blur-sm border border-cyan-500/30 rounded-full text-cyan-400 text-sm font-mono">
            Hello, I'm
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6"
        >
          <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent animate-gradient">
            {personalInfo.name}
          </span>
        </motion.h1>

        {/* Title */}
        <motion.h2
          variants={itemVariants}
          className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-300 mb-4"
        >
          {personalInfo.title}
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="text-lg sm:text-xl text-gray-400 mb-8 max-w-2xl mx-auto"
        >
          {personalInfo.subtitle}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(6, 182, 212, 0.5)' }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg shadow-lg shadow-cyan-500/50 hover:shadow-cyan-500/80 transition-all duration-300"
          >
            View My Work
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-cyan-500/30 text-cyan-400 font-semibold rounded-lg hover:bg-white/20 transition-all duration-300"
          >
            Get In Touch
          </motion.a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col items-center"
        >
          <p className="text-gray-500 text-sm mb-2">Scroll to explore</p>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ArrowDown className="text-cyan-400" size={24} />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;