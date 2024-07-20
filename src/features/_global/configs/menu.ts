import { Menus } from '../types';

export const MENU_CONFIG: Menus = [
  {
    id: 1,
    name: 'group-1',
    items: [
      {
        id: 2,
        title: 'Dashboard',
        to: '/dashboard/home',
        icon: 'Home1'
      },

      {
        id: 3,
        title: 'Members',
        to: '/dashboard/members',
        icon: 'UserMore'
      },
      {
        id: 4,
        title: 'Courses',
        to: '/dashboard/courses',
        icon: 'DocumentFilled'
      }
    ]
  }
];
