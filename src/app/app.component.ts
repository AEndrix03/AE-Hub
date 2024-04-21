import { Component } from '@angular/core';
import { ROUTES } from 'src/shared/configs/routes';
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

  subMenu: MenuItem[] = ROUTES;

  constructor() {}
}
