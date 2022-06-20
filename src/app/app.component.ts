import { Component,HostBinding } from '@angular/core';
import { FormControl, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from "@angular/common/http";
import {RouterModule, Router, ActivatedRoute, ParamMap } from '@angular/router';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormsModule } from "@angular/forms";
import * as userPosts from "./posts.json";
import { trigger,state,style,animate,transition } from "@angular/animations";

interface Post{
  image?: HTMLImageElement;
  caption:string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'instagram';

  Posts: any = (userPosts as any).default;
}
