import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: 'profile.page.html',
  styleUrls: ['profile.page.scss']
})
export class ProfilePage {

  leftVolume: number = 79;
  rightVolume: number = 80;

  constructor() {}

}
