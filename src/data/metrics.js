// Hero stats for the main impact numbers
export const heroStats = [
  {
    id: 'children-reached',
    value: 467000,
    suffix: '',
    label: 'Children Reached Through HealthySteps',
    delay: 0,
  },
  {
    id: 'families-served',
    value: 350000,
    suffix: '+',
    label: 'Families Served Annually',
    delay: 0.2,
  },
  {
    id: 'states-active',
    value: 25,
    suffix: '',
    label: 'States with HealthySteps Sites',
    delay: 0.4,
  },
  {
    id: 'court-teams',
    value: 120,
    suffix: '+',
    label: 'Safe Babies Court Teams',
    delay: 0.6,
  },
];

// Growth timeline data for the area chart
export const growthData = [
  { year: 2019, children: 155000, label: '155K' },
  { year: 2020, children: 210000, label: '210K' },
  { year: 2021, children: 285000, label: '285K' },
  { year: 2022, children: 340000, label: '340K' },
  { year: 2023, children: 405000, label: '405K' },
  { year: 2024, children: 467000, label: '467K' },
];

// Future goal data point
export const goalData = {
  year: 2032,
  target: 1000000,
  label: '1M Goal',
};

// Program details for expandable cards
export const programs = [
  {
    id: 'healthysteps',
    title: 'HealthySteps',
    tagline: 'Transforming pediatric care for families with young children',
    icon: '🏥',
    stats: [
      { label: 'Sites Nationwide', value: '275+' },
      { label: 'States & DC', value: '25' },
      { label: 'Children Reached', value: '467K' },
    ],
    description:
      'HealthySteps is an evidence-based pediatric primary care model that promotes nurturing parenting, healthy development, and family well-being. By embedding child development specialists directly into pediatric practices, we ensure families get the support they need during the critical first three years of life.',
    highlights: [
      'Universal screening for developmental delays and social determinants of health',
      'Tiered support services based on family needs',
      'Direct integration with pediatric well-child visits',
      'Evidence-based approach with proven outcomes',
    ],
  },
  {
    id: 'safe-babies',
    title: 'Safe Babies Court Teams',
    tagline: 'Changing how courts and communities help babies in foster care',
    icon: '⚖️',
    stats: [
      { label: 'Court Teams', value: '120+' },
      { label: 'States', value: '30+' },
      { label: 'Babies Helped', value: '50K+' },
    ],
    description:
      'Safe Babies Court Teams bring together judges, attorneys, child welfare workers, and community members to transform how the court system handles cases involving children under age three. The approach dramatically reduces time to permanency and improves outcomes for our most vulnerable children.',
    highlights: [
      'Average time to permanency reduced by 5+ months',
      'Strong judicial leadership and community collaboration',
      'Focus on preventing trauma and promoting attachment',
      'Data-driven approach with continuous improvement',
    ],
  },
];
