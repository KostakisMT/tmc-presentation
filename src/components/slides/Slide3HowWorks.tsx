import React from 'react';
import { motion } from 'framer-motion';
import { Lock, Link, Shield, ArrowRight } from 'lucide-react';

const HowWorksSlide = () => {
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
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  const steps = [
    {
      icon: Lock,
      title: "Verschlüsselung",
      description: "Jede Transaktion wird kryptographisch verschlüsselt und signiert",
      animation: { rotate: [0, 360] }
    },
    {
      icon: Link,
      title: "Verkettung",
      description: "Neue Informationen werden mit vorherigen Daten verkettet",
      animation: { scale: [1, 1.1, 1] }
    },
    {
      icon: Shield,
      title: "Validierung",
      description: "Das Netzwerk prüft und bestätigt die Transaktion",
      animation: { y: [0, -5, 0] }
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
        <h1 className="text-6xl mb-8">Wie funktioniert Blockchain?</h1>
        <h2 className="text-3xl mb-12">Der Weg einer Transaktion</h2>
      </motion.div>

      <motion.div 
        className="flex-1 grid grid-cols-3 gap-8"
        variants={containerVariants}
      >
        {steps.map((step, index) => (
          <motion.div
            key={index}
            className="border border-[#35F1AB] p-8 rounded-lg bg-[#35F1AB]/5 relative overflow-hidden group"
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
          >
            <motion.div 
              className="mb-6"
              whileHover={step.animation}
            >
              <step.icon className="w-12 h-12 text-[#35F1AB]" />
            </motion.div>

            <h3 className="text-[#35F1AB] text-2xl font-bold mb-4">
              {step.title}
            </h3>

            <p className="text-white text-lg">
              {step.description}
            </p>

            <motion.div
              className="absolute right-4 bottom-4 opacity-0 group-hover:opacity-100"
              initial={{ scale: 0 }}
              whileHover={{ scale: 1.2 }}
            >
              <ArrowRight className="w-6 h-6 text-[#35F1AB]" />
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default HowWorksSlide;
