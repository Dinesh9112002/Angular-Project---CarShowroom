import { Host, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ContactComponent } from './contact/contact.component';
import { AdminlogComponent } from './adminlog/adminlog.component';
import { SignupComponent } from './signup/signup.component';
import { AddcarComponent} from './addcar/addcar.component';
import { Add1Component} from './add1/add1.component';
import { BookcarComponent} from './bookcar/bookcar.component';
import { SellcarComponent} from './sellcar/sellcar.component';
import { UsermenuComponent} from './usermenu/usermenu.component';
import { BookComponent} from './book/book.component';
import { Book2Component} from './book2/book2.component';
import { Book3Component} from './book3/book3.component';
import { Book4Component} from './book4/book4.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'contact',component:ContactComponent},
  {path:'adminlog',component:AdminlogComponent},
  {path:'signup',component:SignupComponent},
  {path: 'addcar',component:AddcarComponent},
  {path: 'add1',component:Add1Component},
  {path: 'bookcar',component:BookcarComponent},
  {path: 'sellcar',component:SellcarComponent},
  {path: 'usermenu',component:UsermenuComponent},
  {path: 'book',component:BookComponent},
  {path: 'book2',component:Book2Component},
  {path: 'book3',component:Book3Component},
  {path: 'book4',component:Book4Component},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
