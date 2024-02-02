import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
ngOnInit(): void {
    
}
  userData:any
  constructor(private builder: FormBuilder,
    private service: ApiService, private router: Router,private toastr:ToastrService) {
      sessionStorage.clear()
    }
    loginForm = this.builder.group({
      username: this.builder.control('', Validators.required),
      password: this.builder.control('', Validators.required),
      role: this.builder.control('', Validators.required),
    })
    login(){
      if(this.loginForm.valid){
        this.service.getUserById(this.loginForm.value.username).subscribe((res)=>{
          this.userData=res
          console.log(this.userData)
          // console.log(this.userData)
          if (this.userData.password===this.loginForm.value.password){
            this.service.Login()
              sessionStorage.setItem("username", this.userData.id)
              sessionStorage.setItem("role", this.userData.user_type)
              console.log(sessionStorage)
              //  console.log(sessionStorage)
              // console.log(this.ss.url[0].path)
             
              this.router.navigate(['/home'])
               
          }else{
            this.toastr.warning('invalid password')
          }
         
         })
 
      }else{
        this.toastr.warning('Invalid Credentials')
      }
     
 
    }
}




















































//  // Flag indicating whether the user is logged in
//  Login: boolean = false;

//  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router, private service: ApiService) {
//    // Clear session storage when the component is initialized
//    sessionStorage.clear();
//  }

//  userData: any;
//  filteredData: any;

//  public loginForm: FormGroup
//  ngOnInit() { 
 
//  this.loginForm = new FormGroup({
//    "username": new FormControl('', Validators.required),
//    "yourpassword": new FormControl('', [Validators.required, Validators.minLength(6), Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)]),
//    "role": new FormControl('', [ Validators.required])
//  })}



//  /**
//   * Attempts to log in the user by sending a request to the server with provided credentials.
//   */
//  login() {
//    // Send an HTTP GET request to the server to fetch user data
//    this.http.get<any>('http://localhost:3000/allusers')
//      .subscribe(res => {

//          console.log('res', res);
//          this.userData = res;
//          const emailAdded = this.loginForm.value.youremailaddress;
//          const emailPassword = this.loginForm.value.yourpassword;
//          const role = this.loginForm.value.role;
//          this.filteredData = this.userData.find((each: any) => each.email === emailAdded);
//          console.log('dataModify', this.filteredData);
//          if (this.filteredData.password === emailPassword) {
//            sessionStorage.setItem("username",this.userData.id)
//            sessionStorage.setItem("role",this.userData.user_type)
//            console.log(sessionStorage)
//            console.log('passcheck');
//            this.service.Login();
//            this.service.userData = this.filteredData;
//            this.loginForm.reset();
//            this.router.navigate(['/']);
          
//          } else {
//            alert('Invalid Email or Password');
//          }
//        }, error => {
//          console.log(error, 'err');

//          alert("Something went wrong!!");
//        })

     
//  }