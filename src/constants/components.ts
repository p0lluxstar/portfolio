import { IProjectData } from '../types/interfaces';

export const URL_GITHUB = 'https://github.com/p0lluxstar';

export const NAV_LIST_ITEM = ['projects', 'skills', 'contact'];

export const SKILLS = [
  'JavaScript',
  'TypeScript',
  'HTML',
  'CSS',
  'SCSS',
  'React',
  'Redux',
  'Git',
  'Material UI',
  'Jest',
  'NextJS',
  'Vite',
  'NestJS',
  'Webpack',
  'PostgreSQL',
  'RestAPI',
  'GraphQL',
  'HTTP',
  'TCP/IP',
  'Photoshop',
  'WordPress',
  'Joomla',
  'Docker',
  'Eslint',
  'Prettier',
  'Husky',
];

export const PROJECTS_DATA: IProjectData[] = [
  {
    id: 1,
    name: { ru: 'Проект 1', en: 'Project 1' },
    imgSrc: 'assets/img/projects/project_1.jpg',
    description: {
      ru: 'Одностраничное приложение со встроенным слайдером изображений и виджатами погоды, аудиоплеера, блока цитат дня, настройками и списком задач.',
      en: 'A single-page application with a built-in image slider and weather widgets, an audio player, a block of quotes of the day, settings and a list of tasks.',
    },
    stack: ['JavaScript', 'HTML', 'CSS'],
    links: {
      github:
        'https://github.com/rolling-scopes-school/p0lluxstar-JSFEPRESCHOOL2022Q4/tree/momentum',
      sait: 'https://magical-semifreddo-e5545c.netlify.app/',
    },
  },
  {
    id: 2,
    name: { ru: 'Проект 2', en: 'Project 2' },
    imgSrc: 'assets/img/projects/project_2.jpg',
    description: {
      ru: 'Адаптивный и интерактивный лендинг сайт. Стили и графика оформлены по макету из Figma.',
      en: 'Adaptive and interactive landing site. Styles and graphics are designed according to the Figma layout.',
    },
    stack: ['JavaScript', 'HTML', 'CSS'],
    links: {
      github:
        'https://github.com/rolling-scopes-school/p0lluxstar-JSFEPRESCHOOL2022Q4/tree/plants-part3',
      sait: 'https://silly-treacle-01171e.netlify.app/',
    },
  },
  {
    id: 3,
    name: { ru: 'Проект 3', en: 'Project 3' },
    imgSrc: 'assets/img/projects/project_3.jpg',
    description: {
      ru: 'Адаптивный и интерактивный двух страничный сайт со слайдером и пагинацией. Стили и графика оформлены по макету из Figma.',
      en: 'Adaptive and interactive two-page website with slider and pagination. Styles and graphics are designed according to the Figma layout.',
    },
    stack: ['JavaScript', 'HTML', 'SASS'],
    links: {
      github:
        'https://github.com/rolling-scopes-school/p0lluxstar-JSFE2023Q1/tree/shelter-part2',
      sait: 'https://jazzy-centaur-243c73.netlify.app/',
    },
  },
  {
    id: 4,
    name: { ru: 'Проект 4', en: 'Project 4' },
    imgSrc: 'assets/img/projects/project_4.jpg',
    description: {
      ru: 'Тренажер для изучения css-селекторов с использованием анимации. Прототип тренажера - приложение CSS Diner.',
      en: 'A simulator for learning css selectors using animation. The prototype of the simulator is the CSS Diner application.',
    },
    stack: ['TypeScript', 'WebPack', 'HTML', 'SASS'],
    links: {
      github:
        'https://github.com/rolling-scopes-school/p0lluxstar-JSFE2023Q1/tree/rss-css-selectors',
      sait: 'https://moonlit-malabi-94c89b.netlify.app/',
    },
  },
  {
    id: 5,
    name: { ru: 'Проект 5', en: 'Project 5' },
    imgSrc: 'assets/img/projects/project_5.jpg',
    description: {
      ru: 'Классическая игра - Сапер. Игра включает звуковые эффекты, уровень сложности, смену темы и сохранение результатов в таблицу.',
      en: 'A classic Minesweeper game. The game includes sound effects, difficulty level, theme change, and saving the results to a spreadsheet.',
    },
    stack: ['JavaScript', 'HTML', 'SASS'],
    links: {
      github:
        'https://github.com/rolling-scopes-school/p0lluxstar-JSFE2023Q1/tree/minesweeper',
      sait: 'https://classy-puppy-2a83e8.netlify.app/',
    },
  },
  {
    id: 6,
    name: { ru: 'Проект 6', en: 'Project 6' },
    imgSrc: 'assets/img/projects/project_6.jpg',
    description: {
      ru: 'Виртуальная клавиатура с возможностью переключаться между двумя языковыми раскладками.',
      en: 'A virtual keyboard with the ability to switch between two language layouts.',
    },
    stack: ['JavaScript', 'HTML', 'SASS'],
    links: {
      github: 'https://github.com/p0lluxstar/virtual-keyboard',
      sait: 'https://splendid-ganache-84f2fd.netlify.app/',
    },
  },
  {
    id: 7,
    name: { ru: 'Проект 7', en: 'Project 7' },
    imgSrc: 'assets/img/projects/project_7.jpg',
    description: {
      ru: 'Приложение с получением данных с сервера через API и выполнением рендеринга страниц на стороне сервера (SSR).',
      en: 'An application that receives data from the server via the API and performs page rendering on the server side (SSR).',
    },
    stack: ['NextJS', 'TypeScript', 'React', 'HTML', 'SASS'],
    links: {
      github: 'https://github.com/p0lluxstar/virtual-keyboard',
      sait: 'https://comfy-figolla-ec13a7.netlify.app',
    },
  },
  {
    id: 8,
    name: { ru: 'Проект 8', en: 'Project 8' },
    imgSrc: 'assets/img/projects/project_8.jpg',
    description: {
      ru: 'Инструмент для работы с API RESTful и GraphQL с авторизацией. Поддерживает отправку запросов и просмотр ответов. Разработан в команде.',
      en: 'A tool for working with the RESTful API and GraphQL. Supports sending requests and viewing responses. Developed by a team.',
    },
    stack: [
      'Vite',
      'TypeScript',
      'React',
      'HTML',
      'SASS',
      'GraphQL',
      'RestAPI',
      'Firebase',
    ],
    links: {
      github: 'https://github.com/p0lluxstar/graphiql-app',
      sait: 'https://restfull-graphiql.netlify.app/',
    },
  },
  {
    id: 9,
    name: { ru: 'Проект 9', en: 'Project 9' },
    imgSrc: 'assets/img/projects/project_9.jpg',
    description: {
      ru: 'Формы с управляемыми и неуправляемыми элементами, включающая валидацию вводимых данных для обеспечения корректности и удобства использования.',
      en: 'Forms with managed and unmanaged elements, including validation of input data to ensure correctness and ease of use.',
    },
    stack: ['Vite', 'TypeScript', 'React', 'HTML', 'SASS'],
    links: {
      github: 'https://github.com/p0lluxstar/graphiql-app',
      sait: 'https://startling-cassata-9de4ea.netlify.app/',
    },
  },
  {
    id: 10,
    name: { ru: 'Проект 10', en: 'Project 10' },
    imgSrc: 'assets/img/projects/project_10.jpg',
    description: {
      ru: 'Pet-проект, предназначенный для мониторинга и анализа динамики изменения цен на продовольственные товары.',
      en: 'Pet is a project designed to monitor and analyze the dynamics of food prices.',
    },
    stack: ['Vite', 'TypeScript', 'React', 'HTML', 'SASS', 'PostgreSQL'],
    links: {
      github: 'https://github.com/p0lluxstar/graphiql-app',
    },
  },
  {
    id: 11,
    name: { ru: 'Проект 11', en: 'Project 11' },
    imgSrc: 'assets/img/projects/project_11.jpg',
    description: {
      ru: 'Pet-проект, предназначенный для создания, редактирования и хранения заметок c авторизацией пользователей.',
      en: 'Pet is a project designed for creating, editing, and storing notes with user authorization.',
    },
    stack: ['Vite', 'TypeScript', 'React', 'HTML', 'SASS', 'PostgreSQL'],
    links: {
      github: 'https://github.com/p0lluxstar/graphiql-app',
    },
  },
];
