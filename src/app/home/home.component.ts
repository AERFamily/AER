import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  markers= [{
    lat: parseInt("43.653908"),
    long: parseInt("-79.384293")
},{
  lat: parseInt("43.653908"),
  long: parseInt("-69.384293")
}];
  constructor() { }

  ngOnInit(): void {
  }

}
