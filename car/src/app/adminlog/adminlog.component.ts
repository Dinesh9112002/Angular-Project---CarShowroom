import { Component } from '@angular/core';
import { Router } from '@angular/router';
// import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-adminlog',
  templateUrl: './adminlog.component.html',
  styleUrls: ['./adminlog.component.css']
})
export class AdminlogComponent {
  email: string= '';
  password: string = '';
  constructor(private router: Router) {}
  addcar(){
    if(this.email == "dinesh@gmail.com" || this.password == "Dinesh@00")
      {
    this.router.navigateByUrl('/addcar');
    }
    else{
      alert(this.email);
    }
}
}