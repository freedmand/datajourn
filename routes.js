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

const MONTHS = {
  JAN: 0,
  FEB: 1,
  MAR: 2,
  APR: 3,
  MAY: 4,
  JUN: 5,
  JUL: 6,
  AUG: 7,
  SEP: 8,
  OCT: 9,
  NOV: 10,
  DEC: 11,
};
const CLASS_END = [15, 30]; // 3:30pm

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
        releaseAfter: new Date(2019, MONTHS.AUG, 27, ...CLASS_END),
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
    ],
  },
];
