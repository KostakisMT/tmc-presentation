'use client';

import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { Sparkles, Zap, ChevronLeft, ChevronRight, ShieldCheck, ArrowRight, Code, Clock, Check } from 'lucide-react';
// Remove unused imports
// import Button from '../../components/ui/button';
import Card from '@/components/ui/card';

// Import all slides
import CoverSlide from '@/components/slides/Slide1Cover';
// Remove unused imports
// import WhatIsBlockchainSlide from '@/components/slides/Slide2WhatIs';
// import HowWorksSlide from '@/components/slides/Slide3HowWorks';
// import ApplicationsSlide from '@/components/slides/Slide4Applications';
// import FutureSlide from '@/components/slides/Slide5Future';
// import TechnicalBasicsSlide from '@/components/slides/Slide6Technical';
// import SmartContractsSlide from '@/components/slides/Slide7SmartContracts';
// import SecuritySlide from '@/components/slides/Slide8Security';
// import PracticalExamplesSlide from '@/components/slides/Slide9Examples';
// import ConclusionSlide from '@/components/slides/Slide10Conclusion';

// Slide configuration
const SLIDES = [
  {
    id: 1,
    component: CoverSlide,
    title: 'Cover'
  },
  // Add other slides here...
];

type TransitionType = 'slide' | 'portal' | 'matrix' | 'bounce' | 'flip';

const TRANSITIONS: Record<TransitionType, Variants> = {
  slide: {
    initial: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    animate: {
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    }),
    transition: {
      type: "tween",
    }
  },
  portal: {
    initial: (direction: number) => ({
      y: direction > 0 ? 1000 : -1000,
      scale: 0.5,
      opacity: 0
    }),
    animate: {
      y: 0,
      scale: 1,
      opacity: 1
    },
    exit: (direction: number) => ({
      y: direction < 0 ? 1000 : -1000,
      scale: 0.5,
      opacity: 0
    }),
    transition: {
      type: "tween",
    }
  },
  matrix: {
    initial: {
      scale: 0.5,
      opacity: 0
    },
    animate: {
      scale: 1,
      opacity: 1
    },
    exit: {
      scale: 0.5,
      opacity: 0
    },
    transition: {
      type: "tween",
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
    },
    exit: (direction: number) => ({
      y: direction < 0 ? 1000 : -1000,
      scale: 0.5,
      opacity: 0
    }),
    transition: {
      type: "tween",
    }
  },
  flip: {
    initial: {
      scale: 0,
      opacity: 0,
      rotate: -180
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
      type: "tween",
    }
  }
};

const getTransitionType = (slideIndex: number): TransitionType => {
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
};

// Define the particle effect component
const ParticleEffect = () => (
  <motion.div className="fixed inset-0">
    {/* Particle effect content */}
  </motion.div>
);

function App() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState(0);
  const [transitionType, setTransitionType] = useState<TransitionType>('slide');

  const CurrentSlideComponent = SLIDES[currentSlideIndex].component;

  const navigateToSlide = useCallback((index: number) => {
    if (index >= 0 && index < SLIDES.length) {
      setSlideDirection(index > currentSlideIndex ? 1 : -1);
      setTransitionType(getTransitionType(index));
      setCurrentSlideIndex(index);
    }
  }, [currentSlideIndex]);

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
    </div>
  );
}

export default App;