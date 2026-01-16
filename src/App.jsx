import { motion } from 'framer-motion';
import Hero from './components/Hero';
import USMap from './components/USMap';
import GrowthChart from './components/GrowthChart';
import StorySection from './components/StorySection';
import ProgramCard from './components/ProgramCard';
import { programs } from './data/metrics';

function App() {
  return (
    <div className="min-h-screen">
      {/* Hero Section - Full Viewport */}
      <Hero />

      {/* US Map Section */}
      <USMap />

      {/* Growth Chart Section */}
      <GrowthChart />

      {/* Story-Based Section */}
      <StorySection />

      {/* Programs Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-ztt-teal-dark mb-4">
              Our Flagship Programs
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Evidence-based initiatives that transform outcomes for infants, toddlers, and their families across the nation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {programs.map((program, index) => (
              <ProgramCard key={program.id} program={program} />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-ztt-teal-dark py-12">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-white/60 text-sm mb-2">
              Interactive Prototype
            </p>
            <p className="text-white text-lg font-semibold">
              Designed & Developed by JPG Tech Solutions
            </p>
            <p className="text-white/40 text-xs mt-4">
              Demonstrating "Impact First, Details on Demand" for Zero to Three's FY25 Annual Report
            </p>
            <p className="text-white/30 text-xs mt-6 max-w-md mx-auto">
              Note: This prototype contains sample data for demonstration purposes. Actual metrics and stories may differ.
            </p>
          </motion.div>
        </div>
      </footer>
    </div>
  );
}

export default App;
