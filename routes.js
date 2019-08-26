import Home from './routes/Home';
import Syllabus from './routes/Syllabus';
import Outline from './routes/Outline';
import Resources from './routes/Resources';
import Instructor from './routes/Instructor';

export default [
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
];
