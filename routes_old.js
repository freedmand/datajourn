import Intro from './routes/Intro';
import KeyAreas from './routes/KeyAreas';

export default [
  ['Introduction', 'intro', Intro],
  ['Syllabus', 'syllabus'],
  [
    'Week 1',
    'week1',
    [
      ['Finding data online', 'finding-data'],
      ['Filing public records requests with FOIA', 'public-records'],
      ['Creating your own data', 'creating-data'],
      ['Key Areas of Data Journalism', 'key-areas'],
    ],
  ],
  [
    'Week 2',
    'week2',
    [
      ['Finding stories in data', 'finding-stories'],
      ['Story discovery costs', 'story-costs'],
      ['Case study: NYT 1980', 'case-study-nyt'],
    ],
  ],
  [
    'Week 3',
    'week3',
    [
      ['Intro to data visualization', 'intro-data'],
      ['Design principles', 'design-principles'],
      ['Colors, scales, and symbols', 'colors-scales-symbols'],
    ],
  ],
  [
    'Week 4',
    'week4',
    [
      ['Coding: JS and beyond', 'coding-js-and-beyond'],
      ['Data scraping', 'data-scraping'],
      ['Making an interactive', 'making-interactive'],
    ],
  ],
];
