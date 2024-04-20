import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppMenuComponent } from '../app-menu/app-menu.component';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [AppMenuComponent],
  imports: [CommonModule, BrowserModule, IonicModule.forRoot()],
  exports: [AppMenuComponent],
})
export class SharedModule {}
