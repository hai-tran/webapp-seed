import { Component, animate, trigger, state, style, transition } from '@angular/core';

import { INavItem } from './navItem';
import { navItems } from '../../dashboard.navItems';

class MenuItem {
  public navItem: INavItem;
  public children: MenuItem[];
  public isExpanded: boolean;
}

@Component({
  moduleId: module.id,
  selector: 'sd-sidebar',
  templateUrl: 'sidebar.component.html',
  styleUrls: ['sidebar.component.css'],
  animations: [
    trigger('slideUpDown', [
      state('in', style({
        height: '*',
        opacity: 1
      })),
      state('out', style({
        height: '0',
        opacity: 0
      })),
      transition('in => out', animate('300ms ease-in-out')),
      transition('out => in', animate('300ms ease-in-out'))
    ]),
  ]
})
export class SidebarComponent {
  public menuItems: MenuItem[] = [];
  public isToggled: boolean = true;

  constructor() {
    navItems.forEach(lv1Item => {
      let childrenMi: MenuItem[] = [];
      lv1Item.children.forEach(lv2Item => {
        childrenMi.push({
          navItem: lv2Item,
          isExpanded: false,
          children: null
        });
      });

      let mi: MenuItem = {
        navItem: lv1Item,
        isExpanded: false,
        children: childrenMi
      };

      this.menuItems.push(mi);
    });

    this.menuItems[0].isExpanded = true;
  }

  public toggle(): void {
    this.isToggled = !this.isToggled;
    if (false === this.isToggled) {
      this.menuItems.forEach(lv1Item => {
        lv1Item.isExpanded = false;
      });
    }
  }

  onLv1MenuClicked(index: number): void {
    if (false === this.menuItems[index].isExpanded) {
      // Open the sub menu items
      for (let i = 0; i < this.menuItems.length; i++) {
        this.menuItems[i].isExpanded = (i === index);
      }
    } else {
      // Close the sub menu items
      this.menuItems[index].isExpanded = false;
    }
  }

  onLv2MenuClicked(lv1Index: number, lv2Index: number): void {
    // Close the children menu item if toggled
    this.menuItems[lv1Index].isExpanded = this.isToggled;
  }
}
