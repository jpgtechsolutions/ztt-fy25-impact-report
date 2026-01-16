// States data for the US Map visualization
// Note: State names must match TopoJSON geo.properties.name exactly

// States active in 2019 with HealthySteps sites
export const states2019 = {
  'California': { sites: 15 },
  'New York': { sites: 12 },
  'Pennsylvania': { sites: 8 },
  'Massachusetts': { sites: 6 },
  'Colorado': { sites: 5 },
  'Connecticut': { sites: 4 },
  'Maryland': { sites: 4 },
  'New Jersey': { sites: 4 },
  'Ohio': { sites: 3 },
  'Florida': { sites: 3 },
  'Illinois': { sites: 3 },
  'Texas': { sites: 2 },
  'Arizona': { sites: 2 },
  'Washington': { sites: 2 },
};

// States active in 2024 (expanded coverage)
export const states2024 = {
  'California': { sites: 35 },
  'New York': { sites: 28 },
  'Pennsylvania': { sites: 18 },
  'Massachusetts': { sites: 14 },
  'Colorado': { sites: 12 },
  'Connecticut': { sites: 10 },
  'Maryland': { sites: 9 },
  'New Jersey': { sites: 9 },
  'Ohio': { sites: 8 },
  'Florida': { sites: 15 },
  'Illinois': { sites: 10 },
  'Texas': { sites: 12 },
  'Arizona': { sites: 7 },
  'Washington': { sites: 6 },
  // New states added since 2019
  'Georgia': { sites: 8 },
  'North Carolina': { sites: 7 },
  'Virginia': { sites: 6 },
  'Michigan': { sites: 5 },
  'Minnesota': { sites: 5 },
  'Oregon': { sites: 4 },
  'Tennessee': { sites: 4 },
  'Indiana': { sites: 3 },
  'Nevada': { sites: 3 },
  'Wisconsin': { sites: 3 },
  'District of Columbia': { sites: 4 },
};

// Summary statistics
export const stateSummary = {
  2019: {
    stateCount: Object.keys(states2019).length,
    totalSites: Object.values(states2019).reduce((sum, s) => sum + s.sites, 0),
  },
  2024: {
    stateCount: Object.keys(states2024).length,
    totalSites: Object.values(states2024).reduce((sum, s) => sum + s.sites, 0),
  },
};

// Helper to get state data for a given year
export const getStateData = (year) => {
  return year === 2019 ? states2019 : states2024;
};

// Helper to check if a state is active for a given year
export const isStateActive = (stateName, year) => {
  const data = getStateData(year);
  return stateName in data;
};

// Helper to get site count for a state
export const getSiteCount = (stateName, year) => {
  const data = getStateData(year);
  return data[stateName]?.sites || 0;
};
