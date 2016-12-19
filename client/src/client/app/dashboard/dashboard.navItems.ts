import { AboutNavItems } from './about/index';
import { HomeNavItems } from './home/index';
import { Level1NavItem } from './shared/sidebar/navItem';

export const navItems: Level1NavItem[] = [
  ...HomeNavItems,
  ...AboutNavItems,
];
