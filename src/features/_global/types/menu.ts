import { IconName } from '@hudoro/admin';

interface MenuItem {
  id: number;
  title: string;
  to: string;
  icon: IconName;
}

interface MenuGroup {
  id: number;
  name: string;
  items: MenuItem[];
}

export type Menus = MenuGroup[];
