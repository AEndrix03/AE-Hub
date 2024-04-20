import { Component, Input, OnInit } from '@angular/core';
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

  constructor() {}

  ngOnInit() {}
}
