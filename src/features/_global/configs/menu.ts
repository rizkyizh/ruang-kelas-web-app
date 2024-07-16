import { Menus } from '../types';

export const MENU_CONFIG: Menus = [
  {
    id: 1,
    name: 'group-1',
    items: [
      {
        id: 2,
        title: 'Members',
        to: '/members',
        icon: 'UserMore'
      },
      {
        id: 3,
        title: 'Courses',
        to: '/courses',
        icon: 'DocumentFilled'
      }
    ]
  }
];
