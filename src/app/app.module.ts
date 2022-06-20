import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ViewPostsComponent } from './view-posts/view-posts.component';
import { FormControl, FormBuilder, Validators } from '@angular/forms';
import { HttpClient, HttpClientModule } from "@angular/common/http";
import {RouterModule, Router, ActivatedRoute, ParamMap } from '@angular/router';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CookieService } from 'ngx-cookie-service';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    NavbarComponent,
    ViewPostsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([

    ]),

  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
