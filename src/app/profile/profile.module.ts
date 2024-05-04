import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileOptionsComponent } from './profile-options/profile-options.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { SharedModule } from 'src/shared/components/shared/shared.module';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [ProfileOptionsComponent, LoginComponent, LogoutComponent],
  imports: [CommonModule, SharedModule, IonicModule],
  exports: [ProfileOptionsComponent, LoginComponent, LogoutComponent],
})
export class ProfileModule {}
