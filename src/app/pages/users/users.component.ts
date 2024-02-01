import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { UserModel } from '../model';
import { SearchComponent } from '../search/search.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: UserModel[] = [];
  // searchTerm: string = '';  //new change
  // public searchTerm !: any;    //The ! indicates that the variable will be initialized later.

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.loadUsers();
  }

  private loadUsers() {
    this.userService.getUsers().subscribe((data) => {
      this.users = data;
    });
  }

  searchText: string ='';

  onSearchTextEntered(searchValue: string){
    this.searchText = searchValue;
    console.log(this.searchText);
  }

}
