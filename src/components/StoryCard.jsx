import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const StoryCard = ({ story, isActive }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const colorMap = {
    'ztt-teal-medium': 'bg-ztt-teal-medium',
    'ztt-teal-light': 'bg-ztt-teal-light',
    'ztt-gold': 'bg-ztt-gold',
    'ztt-orange': 'bg-ztt-orange',
  };

  const bgColor = colorMap[story.accentColor] || 'bg-ztt-teal-medium';

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4 }}
      className="bg-white rounded-2xl shadow-xl overflow-hidden max-w-2xl mx-auto"
    >
      {/* Header with avatar and info */}
      <div className={`${bgColor} p-6 text-white`}>
        <div className="flex items-center gap-4">
          {/* Avatar placeholder */}
          <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center text-2xl font-bold">
            {story.initials}
          </div>
          <div>
            <h3 className="text-xl font-bold">{story.name}</h3>
            <p className="text-white/80 text-sm">{story.location}</p>
            <span className="inline-block mt-1 px-3 py-1 bg-white/20 rounded-full text-xs font-medium">
              {story.program}
            </span>
          </div>
        </div>
      </div>

      {/* Quote section */}
      <div className="p-6">
        <div className="relative">
          <svg
            className="absolute -top-2 -left-2 w-8 h-8 text-gray-200"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
          <blockquote className="text-lg text-gray-700 italic pl-6 leading-relaxed">
            "{story.quote}"
          </blockquote>
        </div>

        {/* Expandable full story */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="mt-6 pt-6 border-t border-gray-100">
                <h4 className="font-semibold text-ztt-teal-dark mb-3">
                  Their Story
                </h4>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {story.fullStory}
                </p>

                {/* Outcome highlight */}
                <div className={`${bgColor} bg-opacity-10 rounded-lg p-4`}>
                  <div className="flex items-center gap-2">
                    <span className="text-xl">✨</span>
                    <div>
                      <p className="text-sm text-gray-500">Impact</p>
                      <p className="font-semibold text-ztt-teal-dark">
                        {story.outcome}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Expand/collapse button */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="mt-4 w-full py-2 text-sm font-medium text-ztt-teal-medium hover:text-ztt-teal-dark transition-colors flex items-center justify-center gap-2"
        >
          {isExpanded ? 'Show less' : 'Read full story'}
          <motion.span
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.2 }}
          >
            ↓
          </motion.span>
        </button>
      </div>
    </motion.div>
  );
};

export default StoryCard;
