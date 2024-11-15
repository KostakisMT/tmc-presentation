import React from 'react';
import { motion } from 'framer-motion';
import { Key, Lock, FileText, Shield, Database, Cpu } from 'lucide-react';

const TechnicalBasicsSlide = () => {
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

  const features = [
    {
      icon: Key,
      title: "Private Key",
      description: "Ihr persönlicher digitaler Schlüssel zur Autorisierung von Transaktionen",
      details: [
        { icon: Shield, text: "Geheimhaltung wichtig" },
        { icon: Lock, text: "Basis für Sicherheit" }
      ],
      animation: { rotate: [0, 360] }
    },
    {
      icon: Database,
      title: "Kryptographie",
      description: "Mathematische Verfahren zur Verschlüsselung der Daten",
      details: [
        { icon: Lock, text: "SHA-256 Hash" },
        { icon: Key, text: "Asymmetrische Verschlüsselung" }
      ],
      animation: { scale: [1, 1.1, 1] }
    },
    {
      icon: Cpu,
      title: "Konsens",
      description: "Mechanismen zur Validierung neuer Blöcke",
      details: [
        { icon: FileText, text: "Proof of Work" },
        { icon: Shield, text: "Proof of Stake" }
      ],
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
        <h1 className="text-6xl mb-8">Technische Grundlagen</h1>
        <h2 className="text-3xl mb-12">Die Bausteine der Blockchain</h2>
      </motion.div>

      <motion.div 
        className="grid grid-cols-3 gap-8"
        variants={containerVariants}
      >
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="border border-[#35F1AB] p-8 rounded-lg bg-[#35F1AB]/5 flex flex-col group"
            variants={itemVariants}
            whileHover={{ scale: 1.02, backgroundColor: 'rgba(53, 241, 171, 0.1)' }}
          >
            <motion.div 
              className="mb-6"
              whileHover={feature.animation}
            >
              <feature.icon className="w-12 h-12 text-[#35F1AB]" />
            </motion.div>

            <h3 className="text-[#35F1AB] text-2xl font-bold mb-4">
              {feature.title}
            </h3>

            <p className="text-white text-lg mb-6">
              {feature.description}
            </p>

            <motion.div className="mt-auto space-y-4">
              {feature.details.map((detail, idx) => (
                <motion.div
                  key={idx}
                  className="flex items-center gap-3 text-white opacity-80"
                  whileHover={{ x: 5, opacity: 1 }}
                >
                  <detail.icon className="w-4 h-4 text-[#35F1AB]" />
                  <span>{detail.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default TechnicalBasicsSlide;
