import { motion } from 'framer-motion';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
} from 'recharts';
import { growthData, goalData } from '../data/metrics';

// Extend data to include future goal projection
const chartData = [
  ...growthData,
  { year: 2028, children: null, projected: 700000 },
  { year: 2032, children: null, projected: 1000000 },
];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    const value = payload[0].value;
    const isProjected = payload[0].dataKey === 'projected';
    return (
      <div className="bg-white px-4 py-3 rounded-lg shadow-lg border border-gray-100">
        <p className="text-sm text-gray-500">{label}</p>
        <p className="text-lg font-bold text-ztt-teal-dark">
          {new Intl.NumberFormat('en-US').format(value)} children
        </p>
        {isProjected && <p className="text-xs text-ztt-gold">Projected Goal</p>}
      </div>
    );
  }
  return null;
};

const GrowthChart = () => {
  return (
    <section className="py-20 bg-ztt-cream">
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
            Our Growth Journey
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From 155,000 children reached in 2019 to 467,000 in 2024—and we're just getting started.
            Our goal: reach <span className="font-bold text-ztt-gold">1 million children</span> by 2032.
          </p>
        </motion.div>

        {/* Chart */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-2xl shadow-lg p-6 md:p-8"
        >
          <ResponsiveContainer width="100%" height={400}>
            <AreaChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
              <defs>
                <linearGradient id="colorChildren" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#0096D6" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#0096D6" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorProjected" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#EAB32A" stopOpacity={0.2} />
                  <stop offset="95%" stopColor="#EAB32A" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
              <XAxis
                dataKey="year"
                axisLine={false}
                tickLine={false}
                tick={{ fill: '#6B7280', fontSize: 12 }}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fill: '#6B7280', fontSize: 12 }}
                tickFormatter={(value) => `${value / 1000}K`}
                domain={[0, 1100000]}
              />
              <Tooltip content={<CustomTooltip />} />

              {/* Goal reference line */}
              <ReferenceLine
                y={goalData.target}
                stroke="#EAB32A"
                strokeDasharray="5 5"
                strokeWidth={2}
                label={{
                  value: '2032 Goal: 1M',
                  position: 'right',
                  fill: '#EAB32A',
                  fontSize: 12,
                  fontWeight: 600,
                }}
              />

              {/* Actual data */}
              <Area
                type="monotone"
                dataKey="children"
                stroke="#0096D6"
                strokeWidth={3}
                fill="url(#colorChildren)"
                dot={{ fill: '#0096D6', strokeWidth: 2, r: 4 }}
                activeDot={{ r: 6, fill: '#1B4A6B' }}
                connectNulls={false}
              />

              {/* Projected data */}
              <Area
                type="monotone"
                dataKey="projected"
                stroke="#EAB32A"
                strokeWidth={2}
                strokeDasharray="5 5"
                fill="url(#colorProjected)"
                dot={{ fill: '#EAB32A', strokeWidth: 2, r: 4 }}
                connectNulls={false}
              />
            </AreaChart>
          </ResponsiveContainer>

          {/* Legend */}
          <div className="flex justify-center gap-8 mt-4 pt-4 border-t border-gray-100">
            <div className="flex items-center gap-2">
              <div className="w-4 h-1 bg-ztt-teal-medium rounded" />
              <span className="text-sm text-gray-600">Children Reached</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-1 bg-ztt-gold rounded" style={{ borderStyle: 'dashed' }} />
              <span className="text-sm text-gray-600">Projected Growth</span>
            </div>
          </div>
        </motion.div>

        {/* Key Milestone Callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 text-center"
        >
          <div className="inline-flex items-center gap-3 bg-white rounded-full px-6 py-3 shadow-md">
            <span className="text-3xl font-bold text-ztt-gold">3x</span>
            <span className="text-gray-600">growth in just 5 years</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GrowthChart;
