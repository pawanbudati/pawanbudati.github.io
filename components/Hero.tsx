import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTypewriter } from '../hooks/useTypewriter.ts';
import { personalInfo, metricsData } from '../constants.ts';
import { GitHubIcon, LinkedInIcon, MailIcon, LeetCodeIcon, CodeforcesIcon } from './Icons.tsx';

const Hero: React.FC = () => {
  const typedTitle = useTypewriter(personalInfo.title, 50, 1000);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const iconVariants = {
    hover: { scale: 1.2, rotate: 5, color: '#E62429' },
    tap: { scale: 0.9 }
  };

  const socialIcons = [
    { key: 'github', url: personalInfo.socials.github, Icon: GitHubIcon, label: 'GitHub Profile' },
    { key: 'linkedin', url: personalInfo.socials.linkedin, Icon: LinkedInIcon, label: 'LinkedIn Profile' },
    { key: 'leetcode', url: personalInfo.socials.leetcode, Icon: LeetCodeIcon, label: 'LeetCode Profile' },
    { key: 'codeforces', url: personalInfo.socials.codeforces, Icon: CodeforcesIcon, label: 'Codeforces Profile' },
    { key: 'email', url: `mailto:${personalInfo.email}`, Icon: MailIcon, label: 'Send Email' },
  ].filter(link => !!link.url);
  
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setToastMessage(`${label} copied to clipboard!`);
    setTimeout(() => setToastMessage(null), 2500);
  };

  return (
    <>
      {/* Toast Notification */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-24 left-1/2 -translate-x-1/2 z-50 bg-slate-900 text-slate-100 border border-spidey-red/50 px-4 py-2 rounded-full shadow-xl flex items-center gap-2 text-sm font-medium"
          >
            <span className="w-2 h-2 rounded-full bg-spidey-red animate-ping" />
            {toastMessage}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Live Status Pill */}
      <motion.div
        className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-slate-800 text-xs font-semibold text-slate-300 mb-6 backdrop-blur-md shadow-inner"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
        </span>
        <span>Open to Lead & Senior Full Stack Opportunities</span>
      </motion.div>

      <motion.h1
        className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-slate-100 tracking-tight"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, type: 'spring' }}
      >
        {personalInfo.name}
      </motion.h1>
      <motion.h2
        className="mt-4 text-2xl md:text-4xl font-semibold gradient-text min-h-12"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {typedTitle}
        <span className="inline-block w-1 h-8 md:h-10 bg-spidey-red animate-pulse ml-1"></span>
      </motion.h2>
      <motion.p
        className="mt-6 max-w-2xl text-lg md:text-xl text-slate-400"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        Lead Full Stack Engineer specializing in Java 21, Spring Boot microservices, high-throughput systems, and reactive React JS architectures.
      </motion.p>
      <motion.div
        className="mt-10 flex flex-col items-center gap-6 w-full"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <motion.button
            onClick={scrollToProjects}
            className="bg-spidey-red text-white font-semibold px-8 py-3 rounded-lg shadow-lg shadow-red-600/30 transition-all duration-300 hover:bg-red-500 hover:shadow-xl hover:shadow-red-500/40"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Featured Work
          </motion.button>

          <div className="flex items-center gap-3">
            <a
              href={personalInfo.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-3 bg-slate-800/60 text-slate-100 rounded-lg border border-slate-700 hover:bg-slate-700 transition"
              aria-label="View Resume"
            >
              View Resume
            </a>
            <a
              href={personalInfo.resume}
              download={`${personalInfo.name}.pdf`}
              className="inline-flex items-center px-4 py-3 bg-spidey-red text-white rounded-lg hover:bg-red-500 transition"
              aria-label="Download Resume"
            >
              Download
            </a>
          </div>
        </div>

        {/* Quick Contact Copy Buttons */}
        <div className="flex items-center gap-3 text-xs">
          <button
            onClick={() => copyToClipboard(personalInfo.email, 'Email')}
            className="px-3 py-1.5 rounded-full bg-slate-800/80 text-slate-300 hover:text-white border border-slate-700 hover:border-slate-500 transition-all flex items-center gap-1.5"
          >
            <span>📧 {personalInfo.email}</span>
            <span className="text-[10px] text-spidey-red font-bold uppercase">Copy</span>
          </button>
          <button
            onClick={() => copyToClipboard(personalInfo.phone, 'Phone number')}
            className="px-3 py-1.5 rounded-full bg-slate-800/80 text-slate-300 hover:text-white border border-slate-700 hover:border-slate-500 transition-all flex items-center gap-1.5"
          >
            <span>📞 {personalInfo.phone}</span>
            <span className="text-[10px] text-spidey-red font-bold uppercase">Copy</span>
          </button>
        </div>

        {/* Social Icons */}
        <div className="mt-2 flex items-center space-x-5">
          {socialIcons.map(({ key, url, Icon, label }) => (
            <motion.a
              key={key}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              variants={iconVariants}
              whileHover="hover"
              whileTap="tap"
              aria-label={label}
            >
              <Icon className="w-7 h-7 text-slate-400 transition-colors" />
            </motion.a>
          ))}
        </div>

        {/* Executive Metrics Strip */}
        <motion.div
          className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-4xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          {metricsData.map((metric, idx) => (
            <div
              key={idx}
              className="glass-card p-4 rounded-xl border border-slate-800 text-center hover:border-spidey-red/40 transition-colors duration-300 group"
            >
              <p className="text-3xl font-extrabold text-slate-100 group-hover:text-spidey-red transition-colors duration-300">
                {metric.value}
              </p>
              <p className="text-xs font-semibold text-slate-200 mt-1">{metric.label}</p>
              <p className="text-[11px] text-slate-400 mt-1 line-clamp-1">{metric.description}</p>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </>
  );
};

export default Hero;
