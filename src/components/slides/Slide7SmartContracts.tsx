import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Zap, ShieldCheck, ArrowRight, Code, Clock, Check } from 'lucide-react';

const SmartContractsSlide = () => {
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

  const lineVariants = {
    hidden: { width: 0 },
    visible: { 
      width: "100%",
      transition: { duration: 0.8 } 
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
      <motion.div className="mb-16" variants={itemVariants}>
        <h1 className="text-6xl mb-8">Smart Contracts</h1>
        <h2 className="text-3xl mb-12">Automatisierte Verträge der Zukunft</h2>
      </motion.div>

      <div className="grid grid-cols-2 gap-12">
        <motion.div className="space-y-8" variants={containerVariants}>
          <motion.div 
            className="border border-[#35F1AB] p-8 rounded-lg bg-[#35F1AB]/5"
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex items-center gap-4 mb-4">
              <Code className="w-8 h-8 text-[#35F1AB]" />
              <h3 className="text-[#35F1AB] text-2xl font-bold">Was sind Smart Contracts?</h3>
            </div>
            <motion.div
              className="h-px bg-[#35F1AB]/30 mb-4"
              variants={lineVariants}
            />
            <p className="text-white text-lg">
              Digitale Verträge, die sich automatisch ausführen, wenn bestimmte Bedingungen erfüllt sind. Sie sind unveränderbar und transparent auf der Blockchain gespeichert.
            </p>
          </motion.div>

          <motion.div 
            className="border border-[#35F1AB] p-8 rounded-lg bg-[#35F1AB]/5"
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
          >
            <h3 className="text-[#35F1AB] text-2xl font-bold mb-6">Vorteile</h3>
            <div className="space-y-4">
              {[
                { icon: Zap, text: "Automatische Ausführung" },
                { icon: ShieldCheck, text: "Manipulationssicher" },
                { icon: Clock, text: "Zeitersparnis" },
                { icon: Check, text: "Keine Intermediäre" }
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-4 text-white"
                  whileHover={{ x: 10 }}
                >
                  <benefit.icon className="w-5 h-5 text-[#35F1AB]" />
                  <span>{benefit.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        <motion.div 
          className="border border-[#35F1AB] p-8 rounded-lg bg-[#35F1AB]/5"
          variants={itemVariants}
        >
          <h3 className="text-[#35F1AB] text-2xl font-bold mb-6">Anwendungsbeispiele</h3>
          <motion.div 
            className="space-y-6"
            variants={containerVariants}
          >
            {[
              {
                title: "Versicherung",
                description: "Automatische Auszahlung bei Flugverspätungen",
                icon: Shield
              },
              {
                title: "Immobilien",
                description: "Automatisierte Mietverträge und Zahlungen",
                icon: Building
              },
              {
                title: "Supply Chain",
                description: "Automatische Zahlungen bei Warenlieferung",
                icon: Box
              }
            ].map((example, index) => (
              <motion.div
                key={index}
                className="group"
                variants={itemVariants}
                whileHover={{ x: 10 }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-2 border border-[#35F1AB] rounded">
                    <example.icon className="w-6 h-6 text-[#35F1AB]" />
                  </div>
                  <div>
                    <h4 className="text-[#35F1AB] text-xl font-bold mb-2">{example.title}</h4>
                    <p className="text-white">{example.description}</p>
                  </div>
                  <motion.div 
                    className="ml-auto opacity-0 group-hover:opacity-100"
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1.2 }}
                  >
                    <ArrowRight className="w-5 h-5 text-[#35F1AB]" />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default SmartContractsSlide;