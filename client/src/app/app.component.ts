import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})




export class AppComponent implements OnInit {
  title = 'Dating App';


users : any;
  //call the API to get data : Https:://localhost/api/user
  //using constructor injection we are making http belongs to this class
  constructor (private http:HttpClient)
  {

  }
  ngOnInit(): void {
    //httpget returns observables
   this.getUsers();


  }

  getUsers()
  {
    const observables = this.http.get("https://localhost:5001/api/user");

   // old: observables.subscribe(res=>{this.store(res);});
   //New version

   observables.subscribe({
    next : res=> this.store(res),
    error: res=>console.log(res)  
                         });
  }

  store(res)
  {
    this.users = res;
  }

}
