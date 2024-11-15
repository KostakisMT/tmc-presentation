import React from 'react';
import { motion } from 'framer-motion';
import { Link, Database, Shield, ChevronRight } from 'lucide-react';

const WhatIsBlockchainSlide = () => {
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

  const blockchainAnimation = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1
      }
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
        <h1 className="text-6xl mb-8">Was ist eine Blockchain?</h1>
        <h2 className="text-3xl mb-12">Die digitale Kette des Vertrauens</h2>
      </motion.div>

      <div className="grid grid-cols-2 gap-12">
        <motion.div 
          className="flex flex-col gap-6"
          variants={containerVariants}
        >
          <p className="text-xl text-white">
            Eine Blockchain ist wie ein digitales Notizbuch, das:
          </p>
          {[
            {
              icon: Database,
              text: "Niemals verändert werden kann",
            },
            {
              icon: Shield,
              text: "Von vielen Computern gleichzeitig geprüft wird",
            },
            {
              icon: Link,
              text: "Transparent und für jeden einsehbar ist",
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              className="flex items-center gap-4 text-white"
              variants={itemVariants}
              whileHover={{ x: 10, transition: { duration: 0.2 } }}
            >
              <ChevronRight className="text-[#35F1AB]" />
              <item.icon className="w-6 h-6 text-[#35F1AB]" />
              <span>{item.text}</span>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="flex items-center justify-center"
          variants={blockchainAnimation}
        >
          <div className="w-full max-w-md space-y-4">
            {[1, 2, 3].map((block) => (
              <motion.div
                key={block}
                className="border border-[#35F1AB] p-6 rounded bg-[#35F1AB]/5"
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: 'rgba(53, 241, 171, 0.15)'
                }}
              >
                <div className="text-white opacity-80 mb-2">Block {block}</div>
                <div className="h-2 bg-[#35F1AB]/20 rounded"></div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default WhatIsBlockchainSlide;
