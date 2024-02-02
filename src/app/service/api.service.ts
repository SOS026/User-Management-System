// Import necessary modules
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // Constructor to inject HttpClient
  constructor(private http: HttpClient) { }



  // User-related methods

  // Method to post user data to the server
  postUser(data: any): Observable<any> {
    return this.http.post<any>('http://localhost:3000/allusers', data);

  }

  // Method to get user data from the server
  getUser(): Observable<any> {
    return this.http.get<any>('http://localhost:3000/allusers');
  }

  // Method to update user data on the server
  updateUser(id: any, data: any): Observable<any> {
    return this.http.put<any>('http://localhost:3000/allusers/' + id, data);
  }

  // Method to delete user data on the server
  deleteUser(id: any): Observable<any> {
    return this.http.delete<any>('http://localhost:3000/allusers/' + id);
  }

  // Method to get a specific user's data by ID from the server
  getUserById(id: any): Observable<any> {
    return this.http.get<any>('http://localhost:3000/allusers/' + id);
  }

  

  // Authentication-related methods

  // Variable to track login status
  loggedIn: boolean = false;
  userData: any;
  // Method to set login status to true
  Login() {
    this.loggedIn = true;
    
    alert('You have logged in')

  }

  // Method to set login status to false
   Logout() {
    this.loggedIn = false;
    alert('You have logged out')

  }

  // Method to check if the user is authenticated
  IsAuthenticated() {
    return this.loggedIn;
    
  }
  getUserRole(){
    return sessionStorage.getItem('role')!=null?sessionStorage.getItem('role')?.toString():''
  }
}
