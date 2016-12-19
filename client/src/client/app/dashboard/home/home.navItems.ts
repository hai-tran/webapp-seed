import { Level1NavItem } from '../shared/sidebar/navItem';

export const HomeNavItems: Level1NavItem[] = [
  {
    name: 'Home',
    iconClass: 'fa fa-home',
    children: [
      {
        name: 'Home',
        routerLink: ['/dashboard/home'],
      },
      {
        name: 'Task',
        routerLink: ['/dashboard/home/tasks'],
      }
    ]
  }
];
