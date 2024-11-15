'use client';

import React, { useState, useCallback, useMemo } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { Sparkles, Zap } from 'lucide-react';

// Import all slides
import CoverSlide from '@/components/slides/Slide1Cover';
import WhatIsBlockchainSlide from '@/components/slides/Slide2WhatIs';
import HowWorksSlide from '@/components/slides/Slide3HowWorks';
import ApplicationsSlide from '@/components/slides/Slide4Applications';
import FutureSlide from '@/components/slides/Slide5Future';
import TechnicalBasicsSlide from '@/components/slides/Slide6Technical';
import SmartContractsSlide from '@/components/slides/Slide7SmartContracts';
import SecuritySlide from '@/components/slides/Slide8Security';
import PracticalExamplesSlide from '@/components/slides/Slide9Examples';
import ConclusionSlide from '@/components/slides/Slide10Conclusion';

// Slide configuration
const SLIDES = [
  {
    id: 1,
    component: CoverSlide,
    title: 'Cover'
  },
  {
    id: 2,
    component: WhatIsBlockchainSlide,
    title: 'Was ist Blockchain'
  },
  {
    id: 3,
    component: HowWorksSlide,
    title: 'Funktionsweise'
  },
  {
    id: 4,
    component: ApplicationsSlide,
    title: 'Anwendungen'
  },
  {
    id: 5,
    component: FutureSlide,
    title: 'Zukunft'
  },
  {
    id: 6,
    component: TechnicalBasicsSlide,
    title: 'Technische Grundlagen'
  },
  {
    id: 7,
    component: SmartContractsSlide,
    title: 'Smart Contracts'
  },
  {
    id: 8,
    component: SecuritySlide,
    title: 'Sicherheit'
  },
  {
    id: 9,
    component: PracticalExamplesSlide,
    title: 'Praktische Beispiele'
  },
  {
    id: 10,
    component: ConclusionSlide,
    title: 'Fazit'
  }
] as const;

// Define transition types and their configurations
type TransitionType = 'slide' | 'flip' | 'matrix' | 'portal' | 'bounce';

const TRANSITIONS: Record<TransitionType, Variants> = {
  slide: {
    initial: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    animate: {
      x: 0,
      opacity: 1
    }),
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    }),
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 30
    }
  },
  flip: {
    initial: (direction: number) => ({
      rotateY: direction > 0 ? 90 : -90,
      opacity: 0
    }),
    animate: {
      rotateY: 0,
      opacity: 1
    }),
    exit: (direction: number) => ({
      rotateY: direction < 0 ? 90 : -90,
      opacity: 0
    }),
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 25
    }
  },
  matrix: {
    initial: {
      opacity: 0,
      scale: 0,
      rotate: 360
    },
    animate: {
      opacity: 1,
      scale: 1,
      rotate: 0
    },
    exit: {
      opacity: 0,
      scale: 0,
      rotate: -360
    },
    transition: {
      duration: 0.5
    }
  },
  portal: {
    initial: {
      scale: 0,
      opacity: 0,
      rotate: 180
    },
    animate: {
      scale: 1,
      opacity: 1,
      rotate: 0
    },
    exit: {
      scale: 0,
      opacity: 0,
      rotate: -180
    },
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 20
    }
  },
  bounce: {
    initial: (direction: number) => ({
      y: direction > 0 ? 1000 : -1000,
      scale: 0.5,
      opacity: 0
    }),
    animate: {
      y: 0,
      scale: 1,
      opacity: 1
    }),
    exit: (direction: number) => ({
      y: direction < 0 ? 1000 : -1000,
      scale: 0.5,
      opacity: 0
    }),
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15
    }
  }
};

// Define the particle effect component
const ParticleEffect = () => (
  <motion.div
    className="fixed inset-0 pointer-events-none"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
  >
    {Array.from({ length: 20 }).map((_, i) => (
      <motion.div
        key={i}
        className="absolute"
        initial={{
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          scale: 0
        }}
        animate={{
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          scale: [0, 1, 0],
          transition: {
            duration: 1,
            repeat: Infinity,
            repeatType: "reverse"
          }
        }}
      >
        {i % 2 === 0 ? (
          <Sparkles className="text-[#35F1AB] w-4 h-4" />
        ) : (
          <Zap className="text-[#35F1AB] w-4 h-4" />
        )}
      </motion.div>
    ))}
  </motion.div>
);

// Main App Component
export default function App() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState(0);
  const [transitionType, setTransitionType] = useState<TransitionType>('slide');

  const getTransitionType = useCallback((slideIndex: number): TransitionType => {
    switch (slideIndex) {
      case 0:
        return 'portal';
      case 1:
        return 'matrix';
      case 2:
        return 'bounce';
      case 3:
        return 'flip';
      default:
        return 'slide';
    }
  }, []);

  const navigateToSlide = useCallback((index: number) => {
    if (index >= 0 && index < SLIDES.length) {
      setSlideDirection(index > currentSlideIndex ? 1 : -1);
      setTransitionType(getTransitionType(index));
      setCurrentSlideIndex(index);
    }
  }, [currentSlideIndex, getTransitionType]);

  // Keyboard navigation
  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight' && currentSlideIndex < SLIDES.length - 1) {
        navigateToSlide(currentSlideIndex + 1);
      } else if (event.key === 'ArrowLeft' && currentSlideIndex > 0) {
        navigateToSlide(currentSlideIndex - 1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlideIndex, navigateToSlide]);

  const CurrentSlideComponent = SLIDES[currentSlideIndex].component;
  const currentTransition = TRANSITIONS[transitionType];

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-[#13103F]">
      <AnimatePresence mode="wait">
        {transitionType === 'matrix' && <ParticleEffect />}
        <motion.div
          key={currentSlideIndex}
          custom={slideDirection}
          variants={currentTransition}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={currentTransition.transition}
          className="w-full h-full"
        >
          <CurrentSlideComponent />
        </motion.div>
      </AnimatePresence>

      {/* Navigation Controls */}
      <div className="absolute bottom-8 right-8 flex gap-4">
        <button
          onClick={() => navigateToSlide(currentSlideIndex - 1)}
          disabled={currentSlideIndex === 0}
          className={`px-4 py-2 rounded border border-[#35F1AB] ${
            currentSlideIndex === 0 
              ? 'opacity-50 cursor-not-allowed' 
              : 'hover:bg-[#35F1AB]/10'
          }`}
        >
          Zurück
        </button>
        <button
          onClick={() => navigateToSlide(currentSlideIndex + 1)}
          disabled={currentSlideIndex === SLIDES.length - 1}
          className={`px-4 py-2 rounded border border-[#35F1AB] ${
            currentSlideIndex === SLIDES.length - 1 
              ? 'opacity-50 cursor-not-allowed' 
              : 'hover:bg-[#35F1AB]/10'
          }`}
        >
          Weiter
        </button>
      </div>

      {/* Slide Counter */}
      <div className="absolute bottom-8 left-8 text-white">
        {currentSlideIndex + 1} / {SLIDES.length}
      </div>
    </div>
  );
}
