import { useEffect, useRef, useState } from "react";

interface RevealOptions {
  threshold?: number;
  delay?: number;
  staggerDelay?: number;
}

export const useCinematicReveal = (options: RevealOptions = {}) => {
  const { threshold = 0.1, delay = 0 } = options;
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
          observer.unobserve(element);
        }
      },
      { threshold }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold, delay]);

  return { ref, isVisible };
};

export const useParallaxTilt = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = (y - centerY) / 20;
      const rotateY = (centerX - x) / 20;

      element.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
    };

    const handleMouseLeave = () => {
      element.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)';
    };

    element.addEventListener('mousemove', handleMouseMove);
    element.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      element.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return ref;
};

export const useFocusSpotlight = () => {
  const [focusedIndex, setFocusedIndex] = useState<number | null>(null);

  return {
    focusedIndex,
    setFocus: (index: number | null) => setFocusedIndex(index),
    getCardStyle: (index: number) => ({
      opacity: focusedIndex === null || focusedIndex === index ? 1 : 0.5,
      filter: focusedIndex !== null && focusedIndex !== index ? 'blur(1px)' : 'none',
      transform: focusedIndex === index ? 'scale(1.05)' : 'scale(1)',
      transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
    }),
  };
};
