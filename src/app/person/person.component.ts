import { Component, OnInit } from '@angular/core';

import {Http,Response,Headers} from '@angular/http';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  constructor(private http:Http) { }
confirmationString:string="New Person Details are added !!!";

isAdded:boolean=false;

personObj:object={};

addNewPerson=function(person){


this.personObj={
"name":person.name,

"dob":person.dob
}
this.http.post("./Birthdayforfamily/products.json/", this.personObj).subscribe((res:Response)=>


{
this.isAdded=true;

  console.log(res);

})


}

  ngOnInit() {
  }

}
