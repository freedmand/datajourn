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
import PivotAssignment from './routes/week2/PivotAssignment';
import ElectionResults from './routes/week2/ElectionResults';
import ElectionAssignment from './routes/week2/ElectionAssignment';
import PivotGuide from './routes/week2/PivotGuide';
import ProjectPitch from './routes/week2/Pitch';

// Week 3
import Week3 from './routes/week3/Week3';
import Class5 from './routes/week3/Class5';
import FOIAAssignment from './routes/week3/FOIAAssignment';

// Week 4
import Week4 from './routes/week4/Week4';
import Class6 from './routes/week4/Class6';
import Class7 from './routes/week4/Class7';
import SketchAssignment from './routes/week4/SketchAssignment';

// Week 5
import Week5 from './routes/week5/Week5';
import Class8 from './routes/week5/Class8';
import FigmaTips from './routes/week5/FigmaTips';
import BarGraphAssignment from './routes/week5/BarGraphAssignment';
import Class9 from './routes/week5/Class9';
import PortfolioMockAssignment from './routes/week5/PortfolioMockAssignment';

// Week 6
import Week6 from './routes/week6/Week6';
import Class10 from './routes/week6/Class10';
import HTMLBridgesAssignment from './routes/week6/HTMLBridgesAssignment';
import Class11 from './routes/week6/Class11';
import HTMLWebsiteAssignment from './routes/week6/HTMLWebsiteAssignment';

// Week 7
import Week7 from './routes/week7/Week7';
import Class12 from './routes/week7/Class12';
import SurveyAssignment from './routes/week7/SurveyAssignment';
import Class13 from './routes/week7/Class13';
import CrashData from './routes/week7/CrashData';

import Tools from './routes/tools/Tools';
import Spreadsheet from './routes/tools/Spreadsheet';

// Week 8
import Week8 from './routes/week8/Week8';
import Class14 from './routes/week8/Class14';
import AutoSeptaSite from './routes/week8/AutoSeptaSite';
import CodePenSite from './routes/week8/CodePenSite';

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
  { title: 'Not Found', slug: '404', component: NotFound, hidden: true },
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
    title: 'Week 8 - Websites',
    slug: 'week-8',
    component: Week8,
    children: [
      { title: 'Class 14: Making a website', slug: 'class-14', component: Class14 },
      { title: 'AutoSepta Site Exercise', slug: 'autosepta-site', component: AutoSeptaSite },
      { title: 'CodePen Conversion Assignment', slug: 'codepen-conversion', component: CodePenSite },
    ],
  },
  {
    title: 'Week 7 - Halfway Point',
    slug: 'week-7',
    component: Week7,
    children: [
      { title: 'Class 12: Recap', slug: 'class-12', component: Class12 },
      {
        title: 'Mid-Semester Survey Assignment',
        slug: 'survey',
        component: SurveyAssignment,
      },
      { title: 'Class 13: AutoSepta Exploration', slug: 'class-13', component: Class13 },
      { title: 'Crash Data', slug: 'crashes', component: CrashData },
    ],
  },
  {
    title: 'Week 6 - HTML',
    slug: 'week-6',
    component: Week6,
    children: [
      { title: 'Class 10: Intro to HTML', slug: 'class-10', component: Class10 },
      {
        title: 'HTML Bridges Assignment',
        slug: 'html-bridges-assignment',
        component: HTMLBridgesAssignment,
      },

      {
        title: 'Class 11: Intro to CSS',
        slug: 'slug-11',
        component: Class11,
      },
      {
        title: 'HTML Website Assignment',
        slug: 'html-website-assignment',
        component: HTMLWebsiteAssignment,
      },
    ],
  },
  {
    title: 'Week 5 - Working with Figma',
    slug: 'week-5',
    component: Week5,
    children: [
      { title: 'Class 8: Diving into Figma', slug: 'class-8', component: Class8 },
      { title: 'Figma Tips', slug: 'figma-tips', component: FigmaTips },
      {
        title: 'Bar Graph Assignment',
        slug: 'bar-graph-assignment',
        component: BarGraphAssignment,
      },
      {
        title: 'Class 9: Figma like a Pro',
        slug: 'pro-figma',
        component: Class9,
      },
      {
        title: 'Portfolio Mock Assignment',
        slug: 'portfolio-mock-assignment',
        component: PortfolioMockAssignment,
      },
    ],
  },
  {
    title: 'Week 4 - Intro to Design',
    slug: 'week-4',
    component: Week4,
    children: [
      { title: 'Class 6: Records, Pitches, Design', slug: 'class-6', component: Class6 },
      {
        title: 'Class 7: Basics of Visual Design',
        slug: 'class-7',
        component: Class7,
      },
      {
        title: 'Sketch Assignment',
        slug: 'sketch-assignment',
        component: SketchAssignment,
      },
    ],
  },
  {
    title: 'Week 3 - Public Records',
    slug: 'week-3',
    component: Week3,
    children: [
      { title: 'Class 5: Public Records', slug: 'class-5', component: Class5 },
      {
        title: 'FOIA FBI Letter Assignment',
        slug: 'foia-fbi',
        component: FOIAAssignment,
      },
    ],
  },
  {
    title: 'Week 2 - Spreadsheet Deep-Dive',
    slug: 'week-2',
    component: Week2,
    children: [
      { title: 'Class 3: Strength in Numbers', slug: 'class-3', component: Class3Data },
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
      {
        title: 'Assignment: Pivot Tables',
        slug: 'pivot-assignment',
        component: PivotAssignment,
      },
      {
        title: 'Project Pitch',
        slug: 'project-pitch',
        component: ProjectPitch,
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
