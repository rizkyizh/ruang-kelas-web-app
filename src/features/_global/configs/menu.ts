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
      },
      {
        id: 5,
        title: 'My Courses',
        to: '/dashboard/my-course',
        icon: 'DocumentFilled'
      },
      {
        id: 6,
        title: 'My Transaction',
        to: '/dashboard/my-transaction',
        icon: 'Money'
      },
      {
        id: 7,
        title: 'My History',
        to: '/dashboard/my-history',
        icon: 'DocumentCheck'
      },
      {
        id: 8,
        title: 'Transactions',
        to: '/dashboard/transaction',
        icon: 'Money'
      },
      {
        id: 9,
        title: 'Histories',
        to: '/dashboard/history',
        icon: 'DocumentCheck'
      }
    ]
  }
];
