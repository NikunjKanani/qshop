import { Component } from '@angular/core';

@Component({
  selector: 'app-setting',
  templateUrl: 'setting.page.html',
  styleUrls: ['setting.page.scss']
})
export class settingPage {

  constructor() {}
  showMyContainer: boolean = false;
  showSettingContainer: boolean = false;  
}
