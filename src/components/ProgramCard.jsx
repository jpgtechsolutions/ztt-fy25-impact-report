import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ProgramCard = ({ program }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transition-shadow duration-300"
      onClick={() => setIsExpanded(!isExpanded)}
    >
      {/* Card Header - Always Visible */}
      <div className="p-6 md:p-8">
        <div className="flex items-start gap-4">
          <span className="text-4xl">{program.icon}</span>
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-ztt-teal-dark mb-2">
              {program.title}
            </h3>
            <p className="text-gray-600">{program.tagline}</p>
          </div>
          <motion.button
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="p-2 rounded-full hover:bg-gray-100 transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              setIsExpanded(!isExpanded);
            }}
          >
            <svg
              className="w-6 h-6 text-ztt-teal-medium"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </motion.button>
        </div>

        {/* Quick Stats - Always Visible */}
        <div className="flex flex-wrap gap-4 mt-6">
          {program.stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-ztt-cream rounded-lg px-4 py-2"
            >
              <div className="text-xl font-bold text-ztt-teal-dark">
                {stat.value}
              </div>
              <div className="text-xs text-gray-500">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Expandable Content */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="px-6 md:px-8 pb-6 md:pb-8 border-t border-gray-100 pt-6">
              {/* Description */}
              <p className="text-gray-600 mb-6 leading-relaxed">
                {program.description}
              </p>

              {/* Highlights */}
              <h4 className="font-semibold text-ztt-teal-dark mb-3">
                Key Highlights
              </h4>
              <ul className="space-y-2">
                {program.highlights.map((highlight, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-2 text-gray-600"
                  >
                    <span className="text-ztt-gold mt-1">✓</span>
                    {highlight}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Click hint */}
      <div className="px-6 pb-4 text-center">
        <span className="text-xs text-gray-400">
          {isExpanded ? 'Click to collapse' : 'Click to learn more'}
        </span>
      </div>
    </motion.div>
  );
};

export default ProgramCard;
