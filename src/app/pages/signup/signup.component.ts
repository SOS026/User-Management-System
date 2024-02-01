import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm !: FormGroup;

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router, private toastr: ToastrService) { }
  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      // id: ['', Validators.required],
      // user_type: ['', Validators.required],
      fullname: ['', Validators.required],
      bio: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6), Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)]]
    })
  }

  signUp() {
    this.http.post<any>("http://localhost:3000/allusers", this.signupForm.value)
      .subscribe(res => {
        this.toastr.info("Signup Successfull")
        this.signupForm.reset();
        this.router.navigate(['login']);
      }, error => {
        this.toastr.error("Something went wrong");
      })
  }

}
