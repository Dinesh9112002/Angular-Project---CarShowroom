import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book4',
  templateUrl: './book4.component.html',
  styleUrls: ['./book4.component.css']
})
export class Book4Component {
  constructor(private router: Router) {}
  bookcar(){
    this.router.navigateByUrl('/bookcar');
  }
}
