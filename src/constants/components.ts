import { IProjectData } from '../types/interfaces';

export const URL_GITHUB = 'https://github.com/p0lluxstar';

export const NAV_LIST_ITEM = ['projects', 'skills', 'contact'];

export const SKILLS = [
  'HTML',
  'CSS',
  'SCSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Redux',
  'Git',
  'Material UI',
  'Jest',
  'Enzyme',
  'CI/CD',
];

export const PROJECTS_DATA: IProjectData[] = [
  {
    name: 'Project 1',
    imgSrc: 'assets/img/projects/project_1.jpg',
    stack: ['JavaScript', 'HTML', 'CSS'],
    links: {
      github: '#git',
      sait: '#sait',
    },
  },
  {
    name: 'Project 2',
    imgSrc: '#',
    stack: ['JavaScript', 'React', 'HTML', 'CSS'],
    links: {
      github: '#git',
      sait: '#sait',
    },
  },
];
