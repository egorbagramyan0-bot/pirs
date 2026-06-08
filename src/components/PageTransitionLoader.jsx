import { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * PageTransitionLoader component displays a premium full-screen rotating helm
 * preloader during route changes, skipping initial render.
 */
export default function PageTransitionLoader() {
  const { pathname } = useLocation();
  const [isVisible, setIsVisible] = useState(false);
  const isFirstRender = useRef(true);

  useEffect(() => {
    // Skip initial mount to prevent conflict with initial HTML page loading spinner
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    setIsVisible(true);

    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 750); // Premium brief transition delay

    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="fixed inset-0 z-[9999] bg-[#fdfbf7] flex flex-col items-center justify-center pointer-events-auto"
        >
          <div className="text-center flex flex-col items-center gap-4">
            {/* Spinning SVG Helm */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 3, ease: 'linear' }}
              className="w-20 h-20 md:w-24 md:h-24 text-brand-blue"
            >
              <svg viewBox="0 0 200 200" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <g id="transition-spoke">
                    <path d="M -2,-24 C -2,-29 -3.5,-32 -3.5,-36 C -3.5,-40 -2,-43 -2,-48 L 2,-48 C 2,-43 3.5,-40 3.5,-36 C 3.5,-32 2,-29 2,-24 Z" fill="none" stroke="currentColor" strokeWidth="2.5" />
                    <rect x="-4" y="-26" width="8" height="2" rx="0.5" fill="currentColor" />
                    <rect x="-4" y="-48" width="8" height="2" rx="0.5" fill="currentColor" />
                    <line x1="0" y1="-48" x2="0" y2="-60" stroke="currentColor" strokeWidth="4.5" />
                    <circle cx="0" cy="-54" r="1.5" fill="#fdfbf7" stroke="currentColor" strokeWidth="2.5" />
                    <rect x="-4.5" y="-62" width="9" height="1.5" rx="0.5" fill="currentColor" />
                    <rect x="-4.5" y="-64" width="9" height="1.5" rx="0.5" fill="currentColor" />
                    <path d="M -2.5,-64 C -2.5,-66 -1.5,-67 -1.5,-69 C -1.5,-72 -4,-74 -4,-77 C -4,-81 -2,-84 -2,-86 M 2,-86 C 2,-84 4,-81 4,-77 C 4,-74 1.5,-72 1.5,-69 C 1.5,-67 2.5,-66 2.5,-64" fill="none" stroke="currentColor" strokeWidth="2.5" />
                    <rect x="-3" y="-87" width="6" height="1.5" rx="0.5" fill="currentColor" />
                    <circle cx="0" cy="-90" r="3.5" fill="none" stroke="currentColor" strokeWidth="2.5" />
                  </g>
                </defs>
                <circle cx="100" cy="100" r="60" fill="none" stroke="currentColor" strokeWidth="3" />
                <circle cx="100" cy="100" r="48" fill="none" stroke="currentColor" strokeWidth="3" />
                <circle cx="100" cy="100" r="24" fill="none" stroke="currentColor" strokeWidth="2.5" />
                <circle cx="100" cy="100" r="15" fill="none" stroke="currentColor" strokeWidth="4.5" />
                <g transform="translate(100, 100)">
                  <use href="#transition-spoke" />
                  <use href="#transition-spoke" transform="rotate(45)" />
                  <use href="#transition-spoke" transform="rotate(90)" />
                  <use href="#transition-spoke" transform="rotate(135)" />
                  <use href="#transition-spoke" transform="rotate(180)" />
                  <use href="#transition-spoke" transform="rotate(225)" />
                  <use href="#transition-spoke" transform="rotate(270)" />
                  <use href="#transition-spoke" transform="rotate(315)" />
                </g>
              </svg>
            </motion.div>
            <div className="space-y-1 mt-2">
              <div className="font-serif text-lg md:text-xl text-brand-blue tracking-[0.3em] font-bold uppercase select-none">
                ПИРС
              </div>
              <div className="font-sans text-[9px] text-brand-gold uppercase tracking-[0.25em] font-semibold select-none">
                Ресторан у воды
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
