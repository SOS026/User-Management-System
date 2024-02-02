import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{

  constructor(private api: ApiService, private router: Router) { }
  user: any;
  
  //navigate the authenticated user to the login page on logout
  ngOnInit(): void {
      this.user = this.api.userData;
  }
  logout() {
    this.api.Logout();
    this.router.navigate(["/login"])
  }
  isLoggedIn(){
    return this.api.loggedIn;
  }
  // isLoggedOut(){
  //   return this.api.Logout;
  // }
  
}
