import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-book2',
  templateUrl: './book2.component.html',
  styleUrls: ['./book2.component.css']
})
export class Book2Component {
  constructor(private router: Router) {}
  bookcar(){
    this.router.navigateByUrl('/bookcar');
  }
}
