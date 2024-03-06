import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
 resultArray: any[]=[];
 email: string ='';
 password: string ='';

 isLogin: boolean =true;
 errorMessage: string="";
 
  constructor(private router: Router,private http: HttpClient) {}
  login(){
    this.router.navigateByUrl('/usermenu');

  }
}
