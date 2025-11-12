// src/components/hoocks/useAnimateOnScroll.jsx
import { useEffect, useRef, useState } from "react";

export default function useAnimateOnScroll(
  inClass = '',
  options = { threshold: 0.1, once: true, delay: 0, duration: 1000 }
) {
  const ref = useRef();
  const [isVisible, setIsVisible] = useState(false);
  const [hasIntersected, setHasIntersected] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && (!hasIntersected || !options.once)) {
          setTimeout(() => {
            setIsVisible(true);
            setHasIntersected(true);
          }, options.delay || 0);
        }
      },
      { threshold: options.threshold || 0.1 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [options, hasIntersected]);

  const className = isVisible ? inClass : '';

  const style = {
    animationDuration: `${(options.duration || 1000) / 1000}s`,
    animationFillMode: 'both',
  };

  return [ref, className, style];
}
