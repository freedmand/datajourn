import NotFound from './NotFound';
import Home from './routes/Home';
import Syllabus from './routes/Syllabus';
import Outline from './routes/Outline';
import Resources from './routes/Resources';
import Instructor from './routes/Instructor';

import Week1 from './routes/week1/Week1';
import IceBreaker from './routes/week1/IceBreaker';
import Intro from './routes/week1/Intro';
import Examples from './routes/week1/Examples';
import CodingPractice from './routes/week1/CodingPractice';
import Survey from './routes/week1/Survey';
import IntroAssignment from './routes/week1/IntroAssignment';
import Spreadsheets from './routes/week1/Spreadsheets';
import DataFormats from './routes/week1/DataFormats';
import SpreadsheetTips from './routes/week1/SpreadsheetTips';
import ExampleDatasets from './routes/week1/ExampleDatasets';
import SpreadsheetAssignment from './routes/week1/SpreadsheetAssignment';

import Tools from './routes/tools/Tools';
import Spreadsheet from './routes/tools/Spreadsheet';

// const MONTHS = {
//   JAN: 0,
//   FEB: 1,
//   MAR: 2,
//   APR: 3,
//   MAY: 4,
//   JUN: 5,
//   JUL: 6,
//   AUG: 7,
//   SEP: 8,
//   OCT: 9,
//   NOV: 10,
//   DEC: 11,
// };
// const CLASS_END = [15, 30]; // 3:30pm

export default [
  {title: 'Not Found', slug: '404', component: NotFound, hidden: true},
  {
    title: 'Home',
    slug: '',
    component: Home,
  },
  {
    title: 'Syllabus',
    slug: 'syllabus',
    component: Syllabus,
  },
  {
    title: 'Outline',
    slug: 'outline',
    component: Outline,
  },
  {
    title: 'Resources',
    slug: 'resources',
    component: Resources,
  },
  {
    title: 'Instructor',
    slug: 'instructor',
    component: Instructor,
  },
  {
    title: 'Tools',
    slug: 'tools',
    component: Tools,
    children: [
      {
        title: 'Spreadsheet',
        slug: 'spreadsheet',
        component: Spreadsheet,
      },
    ],
  },
  {
    title: 'Week 1 - Intro to Data Journalism',
    slug: 'week-1',
    component: Week1,
    children: [
      {
        title: 'Ice Breaker',
        slug: 'icebreaker',
        component: IceBreaker,
      },
      {
        title: 'Class 1: Intro',
        slug: 'class-1',
        component: Intro,
      },
      {
        title: 'Example stories',
        slug: 'examples',
        component: Examples,
      },
      {
        title: 'Coding practice',
        slug: 'coding-practice',
        component: CodingPractice,
      },
      {
        title: 'Survey',
        slug: 'survey',
        component: Survey,
      },
      {
        title: 'Mini Assignment',
        slug: 'intro-assignment',
        component: IntroAssignment,
      },
      {
        title: 'Class 2: Data and Spreadsheets',
        slug: 'class-2',
        component: Spreadsheets,
      },
      {
        title: 'Data Formats',
        slug: 'data-formats',
        component: DataFormats,
      },
      {
        title: 'Spreadsheet Quick Tips',
        slug: 'spreadsheet-tips',
        component: SpreadsheetTips,
      },
      {
        title: 'Example Datasets',
        slug: 'example-datasets',
        component: ExampleDatasets,
      },
      {
        title: 'Spreadsheet Mini Assignment',
        slug: 'spreadsheet-assignment',
        component: SpreadsheetAssignment,
      },
    ],
  },
];
