export const ROUTES = [
  {
    id: 0,
    title: 'Home',
    path: '/home',
    icon: 'home',
  },
  {
    id: 1,
    title: 'Finance',
    path: '/finance',
    children: [
      {
        id: 2,
        title: 'Stats',
        path: '/finance/stats',
        icon: 'add',
      },
      {
        id: 3,
        title: 'History',
        path: '/finance/history',
        icon: 'time',
      },
    ],
  },
  {
    id: 4,
    title: 'Projects',
    path: '/projects',
    children: [
      {
        id: 5,
        title: 'About',
        path: '/projects/about',
        icon: 'list',
      },
      {
        id: 6,
        title: 'Management',
        path: '/projects/management',
        icon: 'analytics-outline',
      },
    ],
  },
];
