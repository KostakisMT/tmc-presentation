import React from 'react';
import { motion } from 'framer-motion';
import { Database, Link, Shield } from 'lucide-react';

const CoverSlide = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: { type: "spring", stiffness: 260, damping: 20 }
    }
  };

  return (
    <motion.div 
      className="flex flex-col h-full"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      style={{ fontFamily: 'Inter' }}
    >
      <div className="flex-1 flex flex-col justify-end">
        <motion.h1 
          className="text-8xl mb-4"
          variants={itemVariants}
          style={{ 
            fontStyle: 'italic',
            fontWeight: 700,
            letterSpacing: '-0.02em',
            color: '#35F1AB'
          }}
        >
          Blockchain &<br />
          Kryptographie
        </motion.h1>
      </div>

      <div className="flex-1 flex flex-col justify-center">
        <motion.h2 
          className="text-4xl mb-8 max-w-3xl"
          variants={itemVariants}
          style={{
            fontWeight: 700,
            color: '#35F1AB'
          }}
        >
          Eine Einführung für Einsteiger
        </motion.h2>
        
        <motion.p 
          className="text-xl max-w-2xl font-light text-white mb-12"
          variants={itemVariants}
        >
          Entdecken Sie die Grundlagen der Blockchain-Technologie 
          und wie sie unsere digitale Zukunft gestaltet
        </motion.p>

        <motion.div className="flex gap-8" variants={containerVariants}>
          {[
            { Icon: Database, label: "Dezentral" },
            { Icon: Link, label: "Verkettet" },
            { Icon: Shield, label: "Sicher" }
          ].map((item, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center"
              variants={iconVariants}
            >
              <item.Icon className="w-12 h-12 text-[#35F1AB] mb-2" />
              <span className="text-white opacity-80">{item.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default CoverSlide;
