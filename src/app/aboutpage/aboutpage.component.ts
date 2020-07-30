import { Component, OnInit } from '@angular/core';
interface Member {
  name: string;
  message: string;
}
interface MemberName {
  alphabet: string;
  occurence: number;
}
const ALERTS: Member[] = [{
    name: 'Rama Kant Singh',
    message: 'This is an success alert',
  }, {
    name: 'Ram Sharan Patel',
    message: 'This is an info alert',
  }, {
    name: 'Bobo',
    message: 'This is a warning alert',
  }, {
    name: 'Billy',
    message: 'This is a danger alert',
  }, {
    name: 'Chore',
    message: 'This is a primary alert',
  }, {
    name: 'Chaman',
    message: 'This is a secondary alert',
  }, {
    name: 'Dog',
    message: 'This is a light alert',
  }, {
    name: 'Dumb',
    message: 'This is a dark alert',
  }
];
const Names:MemberName[] = [{alphabet :"A",
occurence :2},{alphabet :"B",
occurence :2},{alphabet :"C",
occurence :2},{alphabet :"D",
occurence :2}]
let SelectedName:string;
@Component({
  selector: 'app-aboutpage',
  templateUrl: './aboutpage.component.html',
  styleUrls: ['./aboutpage.component.css']
})
export class AboutpageComponent implements OnInit {
  alerts: Member[];
  names:MemberName[];
  constructor() { }
  close(alert: Member) {
    this.alerts.splice(this.alerts.indexOf(alert), 1);

  }

  reset() {
    this.alerts = Array.from(ALERTS);
    this.names = Array.from(Names);

  }
  ngOnInit(): void {
  }
  filterItemsOfType(){
    return this.alerts.filter(x => x.name[0] == SelectedName);
}
  OpenDropDown(val:string){
SelectedName = val;
  }
}
