import React from 'react';
import { motion } from 'framer-motion';
// Remove unused import
// import { ChevronLeft, ChevronRight, Menu } from 'lucide-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Button from '../../components/ui/button'; // Updated import path
import Card from '@/components/ui/card'; // Import Card component

interface SlideLayoutProps {
  children: React.ReactNode;
  currentSlide: number;
  totalSlides: number;
  onNext?: () => void;
  onPrevious?: () => void;
  canGoNext?: boolean;
  canGoPrevious?: boolean;
}

const SlideLayout: React.FC<SlideLayoutProps> = ({
  children,
  currentSlide,
  totalSlides,
  onNext,
  onPrevious,
  canGoNext = true,
  canGoPrevious = true,
}) => {
  const [currentTime, setCurrentTime] = React.useState(new Date());

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatDateTime = () => {
    return new Intl.DateTimeFormat('de-DE', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    }).format(currentTime);
  };

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-[#13103F]">
      {/* Logo Placeholder */}
      <motion.div 
        className="absolute top-8 left-8 w-16 h-16 border border-[#35F1AB]"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {/* Logo wird hier eingefügt */}
      </motion.div>

      {/* Navigation Controls */}
      <div className="absolute top-8 right-8 flex gap-4">
        <Button
          variant="outline"
          size="medium"
          onClick={onPrevious}
          disabled={!canGoPrevious}
          className="transition-all"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          size="medium"
          onClick={onNext}
          disabled={!canGoNext}
          className="transition-all"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>

      {/* Main Content Area */}
      <main className="w-full h-full px-24 py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card>{children}</Card> {/* Wrap children with Card component */}
        </motion.div>
      </main>

      {/* Footer with DateTime and Slide Counter */}
      <div className="absolute bottom-8 left-8 text-sm text-white font-light">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {formatDateTime()}
        </motion.div>
      </div>

      <div className="absolute bottom-8 right-8 text-sm text-white font-light">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {currentSlide} / {totalSlides}
        </motion.div>
      </div>

      {/* Global Styles */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap');
        
        h1 {
          font-family: 'Inter';
          font-weight: 700;
          font-style: italic;
          color: #35F1AB;
          margin-bottom: 1rem;
        }
        
        h2 {
          font-family: 'Inter';
          font-weight: 700;
          color: #35F1AB;
          margin-bottom: 1rem;
        }

        p {
          font-family: 'Inter';
          font-weight: 400;
          color: white;
          line-height: 1.6;
          margin-bottom: 1rem;
        }
      `}</style>
    </div>
  );
};

export default SlideLayout;
