import { Component, OnInit } from '@angular/core';

import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'Birthday-Calender Application';
 // API_URL = 'http://localhost:5555/products';
  // API_URL = '../assets/products.json';
  API_URL = `https://my-json-server.typicode.com/shwetabh123/productsnew/products`;
 
  navItems: any;
  constructor(private http: Http) { }
  id: number;
  private headers = new Headers({ 'Content-Type': 'application/json' });
  products = [];
  fetchdata = function () 
  {
    // this.http.get(`${this.API_URL}/products`).subscribe(
    //  this.http.get("https://api.myjson.com/bins/gdens").subscribe(
    this.navItems = this.http.get(`https://my-json-server.typicode.com/shwetabh123/productsnew/products`).subscribe(
      (res: Response) => {
        this.products = res.json();
      }
    )
  }
  deletePerson = function (id) {
    if (confirm("Are you sure?")) {
      // const url =`${"https://api.myjson.com/bins/gdens"}/${id}`;

      const url = `${`https://my-json-server.typicode.com/shwetabh123/productsnew/products`}/${id}`;

     // const url = `${'http://localhost:5555/products'}/${id}`;

      return this.http.delete(url, { headers: this.headers }).toPromise()
        .then(() => {
          this.fetchdata();
        })
    }
  }
  ngOnInit() {
    this.fetchdata();
  }

}
