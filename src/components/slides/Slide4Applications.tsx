import React from 'react';
import { motion } from 'framer-motion';
import { Coins, FileText, Building2, Heart, ArrowRight } from 'lucide-react';

const ApplicationsSlide = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  const applications = [
    {
      icon: Coins,
      title: "Finanzen",
      description: "Digitale Währungen und automatisierte Zahlungen",
      animation: { rotateY: [0, 360] }
    },
    {
      icon: FileText,
      title: "Smart Contracts",
      description: "Selbstausführende digitale Verträge",
      animation: { scale: [1, 1.1, 1] }
    },
    {
      icon: Building2,
      title: "Supply Chain",
      description: "Transparente Lieferketten und Herkunftsnachweise",
      animation: { y: [0, -5, 0] }
    },
    {
      icon: Heart,
      title: "Gesundheitswesen",
      description: "Sichere Verwaltung von Patientendaten",
      animation: { scale: [1, 0.9, 1] }
    }
  ];

  return (
    <motion.div 
      className="flex flex-col h-full"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      style={{ fontFamily: 'Inter' }}
    >
      <motion.div className="mb-16" variants={itemVariants}>
        <h1 className="text-6xl mb-8">Anwendungsbereiche</h1>
        <h2 className="text-3xl mb-12">Mehr als nur Kryptowährungen</h2>
      </motion.div>

      <motion.div 
        className="grid grid-cols-2 gap-12"
        variants={containerVariants}
      >
        {applications.map((app, index) => (
          <motion.div
            key={index}
            className="group"
            variants={itemVariants}
            whileHover={{ x: 10 }}
          >
            <div className="flex gap-6 items-start border border-[#35F1AB] p-8 rounded-lg bg-[#35F1AB]/5 relative">
              <motion.div 
                className="p-4 border border-[#35F1AB] rounded-lg"
                whileHover={app.animation}
              >
                <app.icon className="w-8 h-8 text-[#35F1AB]" />
              </motion.div>
              
              <div className="flex-1">
                <h3 className="text-[#35F1AB] text-2xl font-bold mb-2">
                  {app.title}
                </h3>
                <p className="text-white text-lg">{app.description}</p>
              </div>

              <motion.div
                className="absolute right-4 opacity-0 group-hover:opacity-100"
                initial={{ scale: 0 }}
                whileHover={{ scale: 1.2 }}
              >
                <ArrowRight className="w-6 h-6 text-[#35F1AB]" />
              </motion.div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default ApplicationsSlide;
