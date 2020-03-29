import { Component, OnInit } from '@angular/core';

import { Http, Response,Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'Birthday-Calender Application';
  constructor(private http: Http) { }
  id:number;
  private headers=new Headers({'Content-Type':'application/json'    });


  products = [];


fetchdata= function (){

this.http.get("http://localhost:5556/products").subscribe(

(res: Response)=>{

 this.products = res.json() ;

}

)

}

deletePerson= function(id){

  
if(confirm("Are you sure?")){


  const url =`${"http://localhost:5556/products"}/${id}`;


return  this.http.delete(url,{ headers: this.headers    }).toPromise()
.then(()=>{

this.fetchdata();

}
)
}


  }

  ngOnInit() {

this.fetchdata();
  }

}
