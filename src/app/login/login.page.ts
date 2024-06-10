import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'login-tabs',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
})
export class LoginPage {
 
  constructor(private navCtrl: NavController) {}

  redirectToTabsPage() {
    this.navCtrl.navigateForward('tabs');
  }
}
