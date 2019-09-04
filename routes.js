import NotFound from './NotFound';
import Home from './routes/Home';
import Syllabus from './routes/Syllabus';
import Outline from './routes/Outline';
import Resources from './routes/Resources';
import Instructor from './routes/Instructor';

// Week 1
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

// Week 2
import Week2 from './routes/week2/Week2';
import Class3Data from './routes/week2/Class3Data';
import Class4Pivots from './routes/week2/Class4Pivots';
// import BabyNames from './routes/week2/BabyNames';
import ElectionResults from './routes/week2/ElectionResults';
import ElectionAssignment from './routes/week2/ElectionAssignment';
import PivotGuide from './routes/week2/PivotGuide';

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
    title: 'Week 2 - Spreadsheet Deep-Dive',
    slug: 'week-2',
    component: Week2,
    children: [
      {title: 'Class 3: Strength in Numbers', slug: 'class-3', component: Class3Data},
      {
        title: 'Analyzing Election Results',
        slug: 'election-results',
        component: ElectionResults,
      },
      {
        title: 'Assignment: Election Results',
        slug: 'election-assignment',
        component: ElectionAssignment,
      },
      {
        title: 'Class 4: Pivot Tables',
        slug: 'class-4',
        component: Class4Pivots,
      },
      {
        title: 'Pivot Tables: An Illustrated Guide',
        slug: 'pivot-guide',
        component: PivotGuide,
      },
      // {title: 'Assignment: Baby Names', slug: 'babynames', component: BabyNames},
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
  {
    title: 'Tools',
    slug: 'tools',
    component: Tools,
    children: [
      {
        title: 'Spreadsheet Preview',
        slug: 'spreadsheet',
        component: Spreadsheet,
      },
    ],
  },
];
