import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
const emailpattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
@Component({
  selector: 'app-comingsoon',
  templateUrl: './comingsoon.component.html',
  styleUrls: ['./comingsoon.component.css']
})
export class ComingsoonComponent implements OnInit {

  constructor(private _httpservice: ApiService) { }

  ngOnInit(): void {
  }
  suscribeEmail(email: string) {
    if (!emailpattern.test(email)) {
      //this.errorVal = true;
      alert("Invalid email id");
    }
    else {
      this._httpservice.SuscribeEmail(email)
        .subscribe
        (
          data => {
            alert("Email subscribed successfully");
          }
        )
    }
  }
}
