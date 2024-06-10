import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { LoginRoutingModule } from './login-routing.module';

import { LoginPage } from './login.page';
import { TabsPageModule } from '../tabs/tabs.module';

@NgModule({
  imports: [IonicModule, CommonModule, FormsModule, LoginRoutingModule,TabsPageModule],
  declarations: [LoginPage],
})
export class LoginModule {}
