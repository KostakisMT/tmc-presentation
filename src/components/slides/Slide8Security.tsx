import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, AlertTriangle, Check, X, Info } from 'lucide-react';

const SecuritySlide = () => {
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

  const pulseAnimation = {
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  const securitySections = [
    {
      icon: Shield,
      title: "Sicherheitsmechanismen",
      color: "rgb(52, 211, 153)",
      items: [
        "Kryptographische Verschlüsselung",
        "Verteilte Netzwerke",
        "Konsensmechanismen",
        "Unveränderliche Datensätze"
      ],
      ItemIcon: Check
    },
    {
      icon: Lock,
      title: "Best Practices",
      color: "rgb(147, 197, 253)",
      items: [
        "Sichere Schlüsselverwahrung",
        "Regelmäßige Updates",
        "Backup-Strategien",
        "Zwei-Faktor-Authentifizierung"
      ],
      ItemIcon: Info
    },
    {
      icon: AlertTriangle,
      title: "Risiken beachten",
      color: "rgb(252, 165, 165)",
      items: [
        "Phishing-Angriffe",
        "Smart Contract Bugs",
        "Private Key Verlust",
        "51% Attacken"
      ],
      ItemIcon: X
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
        <h1 className="text-6xl mb-8">Sicherheit</h1>
        <h2 className="text-3xl mb-12">Schutz und Risiken in der Blockchain</h2>
      </motion.div>

      <motion.div 
        className="grid grid-cols-3 gap-8"
        variants={containerVariants}
      >
        {securitySections.map((section, index) => (
          <motion.div
            key={index}
            className="border border-[#35F1AB] p-8 rounded-lg bg-[#35F1AB]/5"
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
          >
            <motion.div 
              className="mb-6 flex justify-center"
              animate={pulseAnimation}
            >
              <section.icon className="w-12 h-12 text-[#35F1AB]" />
            </motion.div>

            <h3 className="text-[#35F1AB] text-2xl font-bold mb-6 text-center">
              {section.title}
            </h3>

            <motion.ul 
              className="space-y-4"
              variants={containerVariants}
            >
              {section.items.map((item, idx) => (
                <motion.li
                  key={idx}
                  className="flex items-center gap-3 text-white"
                  whileHover={{ x: 10 }}
                  style={{ color: idx % 2 === 0 ? 'white' : 'rgba(255, 255, 255, 0.8)' }}
                >
                  <section.ItemIcon className="w-5 h-5" style={{ color: section.color }} />
                  <span>{item}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default SecuritySlide;
