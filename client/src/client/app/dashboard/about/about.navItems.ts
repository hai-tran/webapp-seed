import { Level1NavItem } from '../shared/sidebar/navItem';

export const AboutNavItems: Level1NavItem[] = [
  {
    name: 'About',
    iconClass: 'fa fa-info',
    children: [
      {
        name: 'About',
        routerLink: ['/dashboard', 'about'],
      }
    ]
  }
];
