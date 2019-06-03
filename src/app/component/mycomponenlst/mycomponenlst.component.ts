import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-mycomponenlst',
  templateUrl: './mycomponenlst.component.html',
  styleUrls: ['./mycomponenlst.component.css']
})
export class MycomponenlstComponent implements OnInit {

  constructor() { }
  newcomponent = "Entered in new component created";
  emailid;
  formdata;
  ngOnInit() {
      this.formdata = new FormGroup({
         emailid: new FormControl("angular@gmail.com"),
         passwd: new FormControl("abcd1234")
      });
  }

  onClickSubmit(data) {this.emailid = data.emailid;}
}
