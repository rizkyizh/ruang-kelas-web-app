import { MENU_CONFIG } from '../configs';
import { autorities, Menus } from '../types';
import { useUserCurrentRole } from './useUserCurrentRole';

export function useMenus() {
  const { role } = useUserCurrentRole();

  if (role !== autorities.ROLE_ADMIN) {
    return [
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
          }
        ]
      }
    ] as Menus;
  }

  // super admin
  return MENU_CONFIG;
}
