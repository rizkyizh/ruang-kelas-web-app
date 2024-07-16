import { Menus } from '../types';

export const MENU_CONFIG: Menus = [
  {
    id: 1,
    name: 'group-1',
    items: [
      {
        id: 2,
        title: 'Members',
        to: '/dashboard/members',
        icon: 'UserMore'
      },
      {
        id: 3,
        title: 'Courses',
        to: '/dashboard/courses',
        icon: 'DocumentFilled'
      }
    ]
  }
];
