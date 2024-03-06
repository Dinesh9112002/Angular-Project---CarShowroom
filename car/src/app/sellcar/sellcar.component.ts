import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sellcar',
  templateUrl: './sellcar.component.html',
  styleUrls: ['./sellcar.component.css']
})
export class SellcarComponent {
  constructor(private router: Router) {}
  usermenu(){
    this.router.navigateByUrl('/usermenu');
  }
}
