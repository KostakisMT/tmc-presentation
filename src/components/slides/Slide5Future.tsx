import React from 'react';
import { motion } from 'framer-motion';
import { TreePine, Zap, Building, Scale } from 'lucide-react';

const FutureSlide = () => {
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

  const topics = [
    {
      icon: TreePine,
      title: "Nachhaltigkeit",
      description: "Entwicklung energieeffizienter Konsensmechanismen und grüner Blockchain-Lösungen",
      animation: { rotate: [0, 5, -5, 0] }
    },
    {
      icon: Building,
      title: "Integration",
      description: "Verstärkte Einbindung in bestehende Systeme und Prozesse",
      animation: { y: [0, -5, 0] }
    },
    {
      icon: Zap,
      title: "Skalierbarkeit",
      description: "Neue Technologien für schnellere und effizientere Transaktionen",
      animation: { scale: [1, 1.1, 1] }
    },
    {
      icon: Scale,
      title: "Regulierung",
      description: "Entwicklung internationaler Standards und rechtlicher Rahmenbedingungen",
      animation: { x: [-5, 5, -5, 0] }
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
        <h1 className="text-6xl mb-8">Die Zukunft der Blockchain</h1>
        <h2 className="text-3xl mb-12">Entwicklungen und Trends</h2>
      </motion.div>

      <motion.div 
        className="grid grid-cols-2 gap-16"
        variants={containerVariants}
      >
        {topics.map((topic, index) => (
          <motion.div
            key={index}
            className="space-y-4"
            variants={itemVariants}
            whileHover={{ x: 10 }}
          >
            <motion.div 
              className="flex items-center gap-4 group"
              whileHover={{ x: 5 }}
            >
              <motion.div 
                className="p-3 border border-[#35F1AB] rounded-lg bg-[#35F1AB]/5"
                whileHover={topic.animation}
              >
                <topic.icon className="w-8 h-8 text-[#35F1AB]" />
              </motion.div>
              <h3 className="text-[#35F1AB] text-2xl font-bold">{topic.title}</h3>
            </motion.div>
            
            <motion.div 
              className="pl-16 border-l border-[#35F1AB]/30"
              whileHover={{ borderLeftColor: '#35F1AB' }}
            >
              <p className="text-white text-lg">
                {topic.description}
              </p>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default FutureSlide;
