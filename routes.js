import Home from './routes/Home';
import Intro from './routes/Intro';
import Syllabus from './routes/Syllabus';
import Week1 from './routes/Week1';
import KeyAreas from './routes/KeyAreas';

export default [
  {
    title: 'Home',
    slug: '',
    component: Home,
  },
  {
    title: 'Introduction',
    slug: 'intro',
    component: Intro,
  },
  {
    title: 'Syllabus',
    slug: 'syllabus',
    component: Syllabus,
  },
  {
    title: 'Week 1',
    slug: 'week1',
    component: Week1,
    children: [
      {
        title: 'Key Areas of Data Journalism',
        slug: 'key-areas',
        component: KeyAreas,
      },
    ],
  },
];
