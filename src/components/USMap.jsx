import { useState, memo } from 'react';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
import { motion, AnimatePresence } from 'framer-motion';
import { getStateData, isStateActive, getSiteCount, stateSummary } from '../data/states';

const geoUrl = 'https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json';

const USMap = () => {
  const [selectedYear, setSelectedYear] = useState(2024);
  const [tooltipContent, setTooltipContent] = useState(null);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });

  const handleMouseEnter = (geo, event) => {
    const stateName = geo.properties.name;
    if (isStateActive(stateName, selectedYear)) {
      const sites = getSiteCount(stateName, selectedYear);
      setTooltipContent({ name: stateName, sites });
      setTooltipPosition({ x: event.clientX, y: event.clientY });
    }
  };

  const handleMouseMove = (event) => {
    if (tooltipContent) {
      setTooltipPosition({ x: event.clientX, y: event.clientY });
    }
  };

  const handleMouseLeave = () => {
    setTooltipContent(null);
  };

  const summary = stateSummary[selectedYear];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-ztt-teal-dark mb-4">
            HealthySteps National Reach
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our evidence-based program has expanded across the country, bringing child development expertise to pediatric practices nationwide.
          </p>
        </motion.div>

        {/* Year Toggle */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex bg-gray-100 rounded-full p-1">
            {[2019, 2024].map((year) => (
              <button
                key={year}
                onClick={() => setSelectedYear(year)}
                className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                  selectedYear === year
                    ? 'bg-ztt-teal-medium text-white shadow-md'
                    : 'text-gray-600 hover:text-ztt-teal-dark'
                }`}
              >
                {year}
              </button>
            ))}
          </div>
        </div>

        {/* Summary Stats */}
        <motion.div
          key={selectedYear}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="flex justify-center gap-8 mb-8"
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-ztt-teal-dark">{summary.stateCount}</div>
            <div className="text-sm text-gray-600">States + DC</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-ztt-teal-dark">{summary.totalSites}</div>
            <div className="text-sm text-gray-600">Total Sites</div>
          </div>
          {selectedYear === 2024 && (
            <div className="text-center">
              <div className="text-3xl font-bold text-ztt-gold">+{summary.stateCount - stateSummary[2019].stateCount}</div>
              <div className="text-sm text-gray-600">New States</div>
            </div>
          )}
        </motion.div>

        {/* Map */}
        <div className="relative max-w-4xl mx-auto" onMouseMove={handleMouseMove}>
          <ComposableMap
            projection="geoAlbersUsa"
            projectionConfig={{ scale: 1000 }}
            className="w-full h-auto"
          >
            <Geographies geography={geoUrl}>
              {({ geographies }) =>
                geographies.map((geo) => {
                  const stateName = geo.properties.name;
                  const isActive = isStateActive(stateName, selectedYear);

                  return (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      onMouseEnter={(event) => handleMouseEnter(geo, event)}
                      onMouseLeave={handleMouseLeave}
                      style={{
                        default: {
                          fill: isActive ? '#0096D6' : '#E5E7EB',
                          stroke: '#FFFFFF',
                          strokeWidth: 0.5,
                          outline: 'none',
                          transition: 'fill 0.3s ease',
                        },
                        hover: {
                          fill: isActive ? '#1B4A6B' : '#D1D5DB',
                          stroke: '#FFFFFF',
                          strokeWidth: 0.5,
                          outline: 'none',
                          cursor: isActive ? 'pointer' : 'default',
                        },
                        pressed: {
                          fill: isActive ? '#1B4A6B' : '#E5E7EB',
                          stroke: '#FFFFFF',
                          strokeWidth: 0.5,
                          outline: 'none',
                        },
                      }}
                    />
                  );
                })
              }
            </Geographies>
          </ComposableMap>

          {/* Tooltip */}
          <AnimatePresence>
            {tooltipContent && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.15 }}
                className="fixed z-50 pointer-events-none"
                style={{
                  left: tooltipPosition.x + 10,
                  top: tooltipPosition.y - 40,
                }}
              >
                <div className="bg-ztt-teal-dark text-white px-4 py-2 rounded-lg shadow-lg">
                  <div className="font-semibold">{tooltipContent.name}</div>
                  <div className="text-sm text-ztt-teal-light">{tooltipContent.sites} sites</div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Legend */}
        <div className="flex justify-center gap-6 mt-6">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded bg-ztt-teal-medium" />
            <span className="text-sm text-gray-600">HealthySteps Active</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded bg-gray-200" />
            <span className="text-sm text-gray-600">Coming Soon</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(USMap);
