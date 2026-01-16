import { useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const StatCard = ({ value, suffix = '', label, delay = 0 }) => {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!isInView) return;

    const duration = 2000; // 2 seconds for the animation
    const steps = 60;
    const stepValue = value / steps;
    const stepDuration = duration / steps;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      if (currentStep >= steps) {
        setDisplayValue(value);
        clearInterval(timer);
      } else {
        // Easing function for smoother animation
        const progress = currentStep / steps;
        const easeOut = 1 - Math.pow(1 - progress, 3);
        setDisplayValue(Math.floor(value * easeOut));
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [isInView, value]);

  const formattedValue = new Intl.NumberFormat('en-US').format(displayValue);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
      className="text-center p-6"
    >
      <div className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-2">
        {formattedValue}
        {suffix && <span className="text-ztt-gold">{suffix}</span>}
      </div>
      <div className="text-lg md:text-xl text-white/80 max-w-xs mx-auto">
        {label}
      </div>
    </motion.div>
  );
};

export default StatCard;
