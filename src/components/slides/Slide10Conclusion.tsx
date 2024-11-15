import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Lightbulb, Radar, Rocket, Target, Shield, Zap, Building } from 'lucide-react';

const ConclusionSlide = () => {
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  const keyPoints = [
    {
      icon: Lightbulb,
      text: "Dezentralisierung schafft Vertrauen",
      animation: { scale: [1, 1.1, 1] }
    },
    {
      icon: Shield,
      text: "Transparenz erhöht Sicherheit",
      animation: { rotate: [0, 5, -5, 0] }
    },
    {
      icon: Zap,
      text: "Automatisierung steigert Effizienz",
      animation: { y: [0, -5, 0] }
    },
    {
      icon: Target,
      text: "Vielfältige Anwendungsmöglichkeiten",
      animation: { x: [-5, 5, -5, 0] }
    }
  ];

  const futurePoints = [
    {
      icon: Rocket,
      title: "Innovation",
      text: "Die Blockchain-Technologie wird unsere digitale Zukunft maßgeblich mitgestalten."
    },
    {
      icon: Radar,
      title: "Entwicklung",
      text: "Neue Anwendungen und Verbesserungen der Technologie werden die Akzeptanz weiter steigern."
    },
    {
      icon: Building,
      title: "Integration",
      text: "Die Integration in bestehende Systeme wird die digitale Transformation beschleunigen."
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
        <h1 className="text-6xl mb-8">Fazit</h1>
        <h2 className="text-3xl mb-12">Die Blockchain-Revolution</h2>
      </motion.div>

      <div className="grid grid-cols-2 gap-16">
        <motion.div className="space-y-8" variants={containerVariants}>
          <h3 className="text-[#35F1AB] text-2xl font-bold mb-6">Kernaspekte</h3>
          {keyPoints.map((point, index) => (
            <motion.div
              key={index}
              className="flex items-center gap-4 group"
              variants={itemVariants}
              whileHover={{ x: 10 }}
            >
              <motion.div 
                className="p-3 border border-[#35F1AB] rounded-lg bg-[#35F1AB]/5"
                whileHover={point.animation}
              >
                <point.icon className="w-6 h-6 text-[#35F1AB]" />
              </motion.div>
              <span className="text-white text-lg">{point.text}</span>
              <motion.div
                className="ml-auto opacity-0 group-hover:opacity-100"
                initial={{ scale: 0 }}
                whileHover={{ scale: 1.2 }}
              >
                <ArrowRight className="w-5 h-5 text-[#35F1AB]" />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="border-l border-[#35F1AB] pl-16"
          variants={containerVariants}
        >
          <h3 className="text-[#35F1AB] text-2xl font-bold mb-6">Ausblick</h3>
          <motion.div className="space-y-8">
            {futurePoints.map((point, index) => (
              <motion.div
                key={index}
                className="space-y-2"
                variants={itemVariants}
                whileHover={{ x: 10 }}
              >
                <div className="flex items-center gap-3 text-[#35F1AB]">
                  <point.icon className="w-5 h-5" />
                  <span className="font-bold">{point.title}</span>
                </div>
                <p className="text-white text-lg pl-8">
                  {point.text}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ConclusionSlide;
