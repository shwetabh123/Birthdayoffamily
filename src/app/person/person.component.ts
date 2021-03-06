import { Component, OnInit } from '@angular/core';

import { Http, Response, Headers } from '@angular/http';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {
  
  //API_URL = 'http://localhost:5555/products';
 
  //  API_URL = './assets/products.json';
  API_URL1 = `https://my-json-server.typicode.com/shwetabh123/productsnew/products/`;


  navItems: any;
  constructor(private http: Http) { }
  confirmationString: string = "New Person Details are added !!!";
  isAdded: boolean = false;
  personObj: object = {};
  
  addNewPerson = function (person) {
    this.personObj = {
      "name": person.name,
      "dob": person.dob
    }
    // this.http.post("https://api.myjson.com/bins/gdens/", this.personObj).subscribe((res:Response)=>

   this.navItems = this.http.post(`https://my-json-server.typicode.com/shwetabh123/productsnew/products/`, this.personObj).subscribe
   
   // this.navItems = this.http.post('http://localhost:5555/products', this.personObj).subscribe
   
    (
      (res: Response) => 
      {
        this.isAdded = true; 
        console.log(res);


      }
      )
  }
  ngOnInit() {
    
    
  }
}



