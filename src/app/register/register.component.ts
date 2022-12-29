import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule ,Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private _route:Router, private _http:HttpClient) { 
    // {
    //   this.signup = new FormGroup({
    //     email: new FormControl('', [Validators.required, Validators.email,Validators.pattern(
    //       '[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,63}$',
    //     ),]),
    //     password: new FormControl('', [Validators.required,Validators.pattern(
    //       '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$'
    //     )])
    //   });
    //  }
  }
    signup:FormGroup|any;
    toast:any;
    signuser:any;

  

  ngOnInit(): void {
    this.signup = new FormGroup({
      'fname': new FormControl(),
      'lname': new FormControl(),
      'email': new FormControl(),   
      'phonenumber': new FormControl(),
      'password': new FormControl(),
      'repassword': new FormControl(),

    
    })

  }
  signupdata(signup:FormGroup){
    // console.log(this.signup.value);
    this.signuser = this.signup.value.fname
    this._http.post<any>("http://localhost:3000/signup",this.signup.value).subscribe(res=>{
      alert('data added successuflly');
      this.signup.reset();
      this._route.navigate(['login']);
  },err=>{
    alert('something went wrong');
  });}
}
