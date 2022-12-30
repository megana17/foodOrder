import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,Validators} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import {Router }from '@angular/router';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


constructor(private _route:Router, private _http:HttpClient,private formBuilder: FormBuilder) { }
login: FormGroup|any;
value:any;


  ngOnInit(): void {
    this.login = new FormGroup({
      'fname': new FormControl(),
      'password': new FormControl()
    })
    
    }

    logindata(login:FormGroup){
      // console.warn(this.login.value);
    this._http.get<any>("http://localhost:3000/signup").subscribe(res=>{
      const user = res.find((a:any)=>{console.log(a.fname);
        return( a.email || a.fname === this.login.value.fname )&&( a.password === this.login.value.password)
      });console.log(user);
      if(user){
        alert('You are successfully login');
        // this.login.reset();
        this._route.navigate(['register']);
      }else
      alert('User Not Found');
      this._route.navigate(['login']);
    },err=>{
      alert('Something was Wrong');
});}
}





