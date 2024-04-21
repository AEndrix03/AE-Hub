import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'src/shared/models';

@Component({
  selector: 'ae-app-menu',
  templateUrl: './app-menu.component.html',
  styleUrls: ['./app-menu.component.scss'],
})
export class AppMenuComponent implements OnInit {
  @Input() appName: string = '';
  @Input() appVersion: string = '';
  @Input() subMenu: MenuItem[] = [];

  constructor(private router: Router) {}

  ngOnInit() {}

  goTo(path: string) {
    this.router.navigate([path]);
  }
}
