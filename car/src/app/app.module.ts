import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { AdminlogComponent } from './adminlog/adminlog.component';
import { ContactComponent } from './contact/contact.component';
import { BookcarComponent } from './bookcar/bookcar.component';
import { AddcarComponent } from './addcar/addcar.component';
import { SellcarComponent } from './sellcar/sellcar.component';
import { UsermenuComponent } from './usermenu/usermenu.component';
import { BookComponent } from './book/book.component';
import { Book2Component } from './book2/book2.component';
import { Book3Component } from './book3/book3.component';
import { Book4Component } from './book4/book4.component';
import { Add1Component } from './add1/add1.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    SignupComponent,
    AdminlogComponent,
    ContactComponent,
    BookcarComponent,
    AddcarComponent,
    SellcarComponent,
    UsermenuComponent,
    BookComponent,
    Book2Component,
    Book3Component,
    Book4Component,
    Add1Component,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
