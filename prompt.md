# Claude Code Prompt: Zero to Three FY25 Impact Report Prototype

## Context

I'm building a prototype to pitch a redesign of Zero to Three's annual impact report. The current site (https://www.zerotothree.org/impact) has beautiful content but suffers from:
- ~1 minute average time on site
- Limited page exploration
- Text-heavy chapters requiring significant reading
- Impact data buried in content rather than frontloaded

My proposal emphasizes **"Impact First, Details on Demand"**—showing key metrics immediately to create curiosity, then letting users explore deeper content if they choose.

## What I Need Built

A **single-page interactive prototype** that demonstrates:

1. **Animated impact dashboard** on load—key metrics that count up or animate in
2. **Interactive U.S. map** showing program locations (HealthySteps sites by state)
3. **Year-over-year comparison** toggle (showing growth trajectory)
4. **Expandable content sections** (headlines visible, details on click/hover)
5. **Smooth scroll animations** as users move through content

This is NOT a full site—it's a proof of concept showing what "interactive data visualization" and "leading with curiosity" looks like.

## Brand Guidelines (extracted from current site)

### Colors
```css
/* Primary palette */
--ztt-teal-light: #4DBCE8;      /* Hero backgrounds, accents */
--ztt-teal-medium: #0096D6;     /* Headlines, links */
--ztt-teal-dark: #1B4A6B;       /* Dark text, nav backgrounds */
--ztt-gold: #EAB32A;            /* Accent color, CTAs, progress bars */
--ztt-orange: #E88A3D;          /* Logo accent, links */
--ztt-cream: #F5F0E6;           /* Section backgrounds */
--ztt-white: #FFFFFF;
--ztt-dark-text: #333333;
```

### Typography
- Clean sans-serif (use Inter, Helvetica, or system fonts)
- Large bold headlines
- Body text at comfortable reading size

### Design Elements
- Rounded corners on cards and images
- Large numbers overlaid on photos
- Geometric accent blocks (squares/rectangles in brand colors)
- Plenty of white space
- Photo cards with subtle shadows

## Data to Include (from FY24 report)

### HealthySteps Program
- **467,000+** children reached in 2024
- **1,248** professionals trained
- **315** sites nationwide
- **25** states + Washington DC + Germany
- **Goal:** 1 million children annually by 2032
- **Growth:** Tripled impact in just 5 years (2019: ~155K → 2024: 467K)

### Safe Babies Court Teams
- Present in **30+ states**
- **90%+** of children reunited with family or placed permanently within a year

### Overall Organization
- Founded **1977** (47+ years of impact)
- Serves **babies, toddlers, and families** ages 0-3

### States with HealthySteps sites (for map)
Use this data for the interactive map—show these states as "active":
Arizona, Arkansas, California, Colorado, Connecticut, Delaware, Florida, Georgia, Illinois, Maryland, Massachusetts, Michigan, Minnesota, Missouri, New Hampshire, New Jersey, New York, North Carolina, Ohio, Oregon, Pennsylvania, Texas, Virginia, Washington, Wisconsin
(Plus DC and international sites in Germany)

## Technical Requirements

- **Framework:** React with Vite (or Next.js if you prefer)
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion or CSS animations
- **Charts:** Recharts or Chart.js for any data visualization
- **Map:** React Simple Maps or a similar lightweight library
- **Deployment-ready:** Should work on Vercel

## Specific Features to Demonstrate

### 1. Hero Section with Animated Counters
When the page loads, show 3-4 key metrics that count up from 0:
- "467,000+ children reached"
- "315 sites nationwide"  
- "25 states + DC"
- "3x growth in 5 years"

Use staggered timing so they don't all animate at once.

### 2. Interactive U.S. Map
- States with HealthySteps sites highlighted in teal
- Hover state shows state name and number of sites (can use placeholder numbers)
- Maybe a toggle to show "2019 coverage" vs "2024 coverage" to visualize growth

### 3. Growth Timeline/Chart
A simple visualization showing the trajectory:
- 2019: ~155,000 children
- 2020: ~200,000
- 2021: ~280,000
- 2022: ~350,000
- 2023: ~400,000
- 2024: 467,000+
- 2032 goal: 1,000,000 (shown as target)

### 4. Expandable Program Cards
Show program names (HealthySteps, Safe Babies, etc.) with a one-line hook. Click to expand and see more detail. This demonstrates "headlines first, details on demand."

### 5. Scroll-triggered Animations
As users scroll, content should fade/slide in smoothly. Nothing aggressive—subtle reveals.

## File Structure Suggestion
```
/src
  /components
    Hero.jsx (animated counters)
    USMap.jsx (interactive map)
    GrowthChart.jsx (timeline visualization)
    ProgramCard.jsx (expandable cards)
    StatCard.jsx (reusable metric display)
  /data
    states.js (map data)
    metrics.js (numbers for animations)
  App.jsx
  index.css (Tailwind + custom properties)
```

## What Success Looks Like

When Zero to Three sees this prototype, they should:
1. **Immediately understand the impact** (numbers hit them on load)
2. **Want to explore** (the map and charts invite interaction)
3. **See how their content could be reorganized** (expandable sections)
4. **Feel the brand** (colors, typography, and style match their identity)

This should take them from "here's a proposal" to "oh, I can SEE what he means."

## Notes

- Don't worry about perfect mobile responsiveness—desktop-first is fine for this demo
- Placeholder images are fine—use Unsplash photos of families/children if needed
- The map doesn't need to be geographically perfect—it's demonstrating the concept
- Keep the code clean and well-organized in case they ask to see it
- Add a small "Prototype by JPG Tech Solutions" footer

## Reference

Current site to match style: https://www.zerotothree.org/impact

---

Build this as a polished demo that makes the proposal tangible. Focus on the "wow" moments: the counting numbers, the interactive map, the smooth animations. Make them feel what the new report could be.