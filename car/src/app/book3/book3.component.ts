import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book3',
  templateUrl: './book3.component.html',
  styleUrls: ['./book3.component.css']
})
export class Book3Component {
  constructor(private router: Router) {}
  bookcar(){
    this.router.navigateByUrl('/bookcar');
  }
}
