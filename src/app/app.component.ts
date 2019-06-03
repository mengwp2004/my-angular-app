import { Component } from '@angular/core';

import { MyserviceService } from './service/myservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  todaydate;
  myData: Array<any>;
  constructor(private myservice: MyserviceService) {}
    ngOnInit() {
      this.todaydate = this.myservice.showTodayDate();
    }

  onClickSubmit(data) {
      alert("Entered Email id : " + data.emailid);
  }
}
