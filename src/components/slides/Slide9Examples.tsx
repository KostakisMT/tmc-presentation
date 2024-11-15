import React from 'react';
import { motion } from 'framer-motion';
import { Coins, FileCheck, Building2, Truck, ArrowRight, ExternalLink } from 'lucide-react';

const PracticalExamplesSlide = () => {
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

  const examples = [
    {
      icon: Coins,
      title: "Bitcoin",
      description: "Die erste und bekannteste Kryptowährung",
      details: "Digitales Zahlungssystem ohne zentrale Instanz",
      color: "#F7931A",
      animation: { rotateY: [0, 360] }
    },
    {
      icon: FileCheck,
      title: "Ethereum",
      description: "Platform für Smart Contracts",
      details: "Ermöglicht die Entwicklung dezentraler Anwendungen",
      color: "#627EEA",
      animation: { scale: [1, 1.1, 1] }
    },
    {
      icon: Building2,
      title: "Hyperledger",
      description: "Enterprise Blockchain-Lösung",
      details: "Fokus auf Geschäftsanwendungen und Skalierbarkeit",
      color: "#2F6E95",
      animation: { y: [0, -5, 0] }
    },
    {
      icon: Truck,
      title: "VeChain",
      description: "Supply Chain Management",
      details: "Nachverfolgung von Produkten und Warenströmen",
      color: "#15BDFF",
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
        <h1 className="text-6xl mb-8">Praktische Beispiele</h1>
        <h2 className="text-3xl mb-12">Blockchain im Einsatz</h2>
      </motion.div>

      <motion.div 
        className="grid grid-cols-2 gap-8"
        variants={containerVariants}
      >
        {examples.map((example, index) => (
          <motion.div
            key={index}
            className="relative group"
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
          >
            <div className="border border-[#35F1AB] p-8 rounded-lg bg-[#35F1AB]/5 h-full">
              <div className="flex items-start gap-6">
                <motion.div 
                  className="p-4 border border-[#35F1AB] rounded-lg"
                  whileHover={example.animation}
                  style={{ backgroundColor: `${example.color}15` }}
                >
                  <example.icon className="w-8 h-8" style={{ color: example.color }} />
                </motion.div>
                
                <div className="flex-1">
                  <h3 className="text-[#35F1AB] text-2xl font-bold mb-2 flex items-center gap-2">
                    {example.title}
                    <motion.span
                      className="opacity-0 group-hover:opacity-100"
                      initial={{ scale: 0 }}
                      whileHover={{ scale: 1.2 }}
                    >
                      <ExternalLink className="w-4 h-4 text-[#35F1AB]" />
                    </motion.span>
                  </h3>
                  <p className="text-white text-lg mb-2">{example.description}</p>
                  <p className="text-white opacity-60">{example.details}</p>
                </div>
              </div>

              <motion.div
                className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100"
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

export default PracticalExamplesSlide;
