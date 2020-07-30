import { Component } from '@angular/core';
import { ApiService } from './services/api.service';
interface langObject{
  name:string,
  value:string
}
interface mainObj{
  Language:langObject[],
  menus:langObject[]
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AER';
  selectedLanguage = "english";
  public mydata: any ;
  public innerWidth: any;
  public mainLang:langObject[]=[];
  public subLang :langObject[]=[];
  constructor(private dataservice:ApiService) { 
    if(window.innerWidth >= 1270)
    {
      console.log(window.innerWidth);
      this.innerWidth = 1170;
    }
    else if(window.innerWidth >= 992)
    {
      this.innerWidth = 970;
    }
    else
    {
      this.innerWidth = 750;
    }
  }
  ngOnInit()
  {
    this.dataservice.getData(this.selectedLanguage).subscribe((data :any)=> {
      this.mydata =data;
      var langNum = this.innerWidth/100;
      console.log(data.menus);
      for (var i=0; i<langNum; i++)  
      {
       this.mainLang.push(<langObject>this.mydata.Language[i]);
      }
      for (var j=langNum; i<this.mainLang.length; j++)  
       {
         this.subLang.push(<langObject>this.mydata.Language[j]);
       }
             
            },
      error=> { 
              console.log("Error in recieving data");     
  });
  }
  onLanguageSelect(lang:string){
    console.log(lang);
    this.selectedLanguage = lang;
    this.dataservice.getData(this.selectedLanguage).subscribe(data => {
     this.mydata = data;
   },error => { 
     console.log("could not find data");

   });
  }
}
