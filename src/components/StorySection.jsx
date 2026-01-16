import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import StoryCard from './StoryCard';
import { familyStories, storyStats } from '../data/stories';

const StorySection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextStory = () => {
    setCurrentIndex((prev) => (prev + 1) % familyStories.length);
  };

  const prevStory = () => {
    setCurrentIndex((prev) => (prev - 1 + familyStories.length) % familyStories.length);
  };

  const currentStory = familyStories[currentIndex];

  return (
    <section className="py-20 bg-gradient-to-b from-ztt-cream to-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1 bg-ztt-gold/20 text-ztt-teal-dark rounded-full text-sm font-medium mb-4">
            Real Stories, Real Impact
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-ztt-teal-dark mb-4">
            Behind Every Number is a Family
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our programs create lasting change because they meet families where they are.
            Here are some of the families whose lives have been transformed.
          </p>
        </motion.div>

        {/* Story Carousel */}
        <div className="relative max-w-3xl mx-auto">
          {/* Navigation Arrows */}
          <button
            onClick={prevStory}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-10 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center text-ztt-teal-medium hover:text-ztt-teal-dark hover:shadow-xl transition-all"
            aria-label="Previous story"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextStory}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-10 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center text-ztt-teal-medium hover:text-ztt-teal-dark hover:shadow-xl transition-all"
            aria-label="Next story"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Story Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStory.id}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
            >
              <StoryCard story={currentStory} isActive={true} />
            </motion.div>
          </AnimatePresence>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-2 mt-6">
            {familyStories.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'w-8 bg-ztt-teal-medium'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to story ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-ztt-teal-dark mb-1">
                {new Intl.NumberFormat('en-US').format(storyStats.totalFamiliesServed)}+
              </div>
              <div className="text-gray-500 text-sm">Families Served Annually</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-ztt-gold mb-1">
                {storyStats.avgTimeToIntervention}
              </div>
              <div className="text-gray-500 text-sm">Average Early Intervention</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-ztt-teal-dark mb-1">
                {storyStats.satisfactionRate}%
              </div>
              <div className="text-gray-500 text-sm">Family Satisfaction Rate</div>
            </div>
          </div>

          {/* Quote */}
          <div className="mt-8 pt-6 border-t border-gray-100 text-center">
            <p className="text-gray-500 italic">
              "{storyStats.parentQuote}"
            </p>
            <p className="text-sm text-gray-400 mt-2">— Parent feedback from 2024 survey</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StorySection;
