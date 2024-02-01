import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserModel } from '../model';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-userbyadmin',
  templateUrl: './userbyadmin.component.html',
  styleUrls: ['./userbyadmin.component.css']
})
export class UserbyadminComponent implements OnInit {

  formValue : FormGroup;
  userModelObj: UserModel = new UserModel();
  userData : any;
  showAdd : boolean;
  showUpdate : boolean;
  constructor(private formbuilder: FormBuilder, private api: ApiService) {}
  

  
  ngOnInit(): void {
    this.formValue = this.formbuilder.group({
      id: ['', Validators.required],
      fullName : ['', Validators.required],
      userType : ['', Validators.required],
      email : ['', Validators.required],
      password : ['', Validators.required],
      mobile : ['', Validators.required],
      bio : ['', Validators.required]
    })
    this.getAllUser();
  }

  clickAddUser(){
    this.formValue.reset();
    this.showAdd = true;
    this.showUpdate = false;
  }

  postUserDetails(){


    this.userModelObj.fullName = this.formValue.value.fullName;
    this.userModelObj.userType = this.formValue.value.userType;
    this.userModelObj.email = this.formValue.value.email;
    this.userModelObj.password = this.formValue.value.password;
    this.userModelObj.mobile = this.formValue.value.mobile;
    this.userModelObj.bio = this.formValue.value.bio;
  
    this.userModelObj.id = this.formValue.value.id;

    this.api.postUser(this.userModelObj)
    .subscribe(res=>{
      console.log("Successfully added the user details");
      console.log(res);
      alert("User added successfully")
      let ref = document.getElementById('cancel')
      ref?.click();
      this.formValue.reset();
      this.getAllUser();
    }
    ,
    err=>{
      alert("Something went wrong");
      console.error(err)
    }
    )
  }
  getAllUser(){
    this.api.getUser()
    .subscribe(res=>{
      this.userData = res;
    })
  }
  deleteUser(row: any){
    this.api.deleteUser(row.id)
    .subscribe(res=>{
      alert("Deleted Successfully");
      this.getAllUser();
    })
  }
  onEdit(row: any){
    this.showAdd = false;
    this.showUpdate = true;
    this.userModelObj.id = row.id;
    console.log(row.id)
    this.formValue.controls['fullName'].setValue(row.fullName);
    this.formValue.controls['userType'].setValue(row.userType);
    this.formValue.controls['email'].setValue(row.email);
    this.formValue.controls['password'].setValue(row.password);
    this.formValue.controls['mobile'].setValue(row.mobile);
    this.formValue.controls['bio'].setValue(row.bio);
  }
  updateUserDetails(){
    this.userModelObj.fullName = this.formValue.value.fullName;
    this.userModelObj.userType = this.formValue.value.userType;
    this.userModelObj.email = this.formValue.value.email;
    this.userModelObj.password = this.formValue.value.password;
    this.userModelObj.mobile = this.formValue.value.mobile;
    this.userModelObj.bio = this.formValue.value.bio;

    this.api.updateUser(this.userModelObj,this.userModelObj.id)
    .subscribe(res=>{
      alert("Updated Successfully");
      let ref = document.getElementById('cancel')
      ref?.click();
      this.formValue.reset();
      this.getAllUser();
    })
  }

}
