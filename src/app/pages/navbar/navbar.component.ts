import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(private api: ApiService, private router: Router) { }

  //navigate the authenticated user to the login page on logout
  logout() {
    this.api.Logout();
    this.router.navigate(["/login"])
  }
  
}
