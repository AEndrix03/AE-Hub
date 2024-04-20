import { Component } from '@angular/core';
import { APPLICATION_NAME, APPLICATION_VERSION } from 'src/shared/costants';
import { MenuItem } from 'src/shared/models';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  appName: string = APPLICATION_NAME;
  appVersion: string = APPLICATION_VERSION;

  subMenuTitle: string = 'AEndrix - ' + this.appName;

  subMenu: MenuItem[] = [
    {
      title: 'Home',
      path: '/home',
      icon: 'home',
    },
    {
      title: 'About',
      path: '/about',
      icon: 'information-circle',
    },
    {
      title: 'Contact',
      path: '/contact',
      children: [
        {
          title: 'Email',
          path: '/contact/email',
          icon: 'mail',
        },
        {
          title: 'Phone',
          path: '/contact/phone',
          icon: 'call',
        },
      ],
    },
  ];

  constructor() {}
}
