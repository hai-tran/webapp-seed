export interface INavItem {
  name: string;
}

export class Level1NavItem implements INavItem {
  public name: string;
  public iconClass: string;
  public children: Level2NavItem[];
}

export class Level2NavItem implements INavItem {
  public name: string;
  public routerLink: string[];
}
