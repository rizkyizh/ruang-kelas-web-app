import { MENU_CONFIG } from '../configs';
import { Menus } from '../types';
import { ROLE, useUserCurrentRole } from './useUserCurrentRole';

export function useMenus() {
  const { role } = useUserCurrentRole();

  if (role !== ROLE.SUPER_ADMIN) {
    return [
      {
        id: 1,
        name: 'group-1',
        items: [
          {
            id: 3,
            title: 'Customers',
            to: '/customers',
            icon: 'UserMore'
          }
        ]
      }
    ] as Menus;
  }

  // super admin
  return MENU_CONFIG;
}
