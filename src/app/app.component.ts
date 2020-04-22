import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  HideSecret = false;
  SecretText = '';
  ButtonName = 'Display Details';
  CurDateTime: Array<string> = [];
  OnClickDisplayHideSecret() {

    // tslint:disable-next-line: prefer-const
    let today = new Date();
    // tslint:disable-next-line: prefer-const
    let date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    // tslint:disable-next-line: prefer-const
    let time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
    // tslint:disable-next-line: prefer-const
    let dateTime = date + ' ' + time;
    this.CurDateTime.push(this.CheckCurrentStateDetails() + 'at ' + dateTime) ;
    if (!this.HideSecret) {
      this.SecretText = 'Missles launch codes: ALPHA: 61436701	BRAVO: 36758567	CHARLIE: 79473176';
      this.HideSecret = true;
      this.ButtonName = 'Hide Details';
    } else {
      this.SecretText = '';
      this.HideSecret = false;
      console.log(this.SecretText);
      this.ButtonName = 'Display Details';
    }
  }

  CheckCurrentStateDetails(): String {
    if (this.ButtonName !== 'Hide Details') {
      return 'Details displayed ';
    } else {
      return 'Details hidden ';
    }
  }
}
