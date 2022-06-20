import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import {RouterModule, Router, ActivatedRoute, ParamMap } from '@angular/router';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormsModule } from "@angular/forms";
import posts from "../posts.json";
import { trigger,state,style,animate,transition,query,animateChild } from "@angular/animations";
import { CookieService } from 'ngx-cookie-service';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
   animation:any;
   getJson:any;
   data:any;
   id:any;
   likeCount:any;
   likes:any;
   numberOfLikes:any;
   item:any;
   likeId:any;
   show:boolean=false;

   public postList:{id:number;img: string;caption:string;likes:number}[] = posts;

   constructor(private http:HttpClient, private router:Router, private route:ActivatedRoute,private cookie: CookieService ) {}
 

  navigate(event:any){
    this.id =event;
    console.log(event);
   this.router.navigate(['./view/'+ this.id]);
}

  like(event:any){
    sessionStorage.setItem("likeId",event);
   this.postList[event].likes++
    
}
showIcon(event:any){
this.likeCount=this.postList[event].likes
console.log(this.likeCount);
  this.show = !this.show;
  setTimeout(() => {
    this.show =false;
  }, 500);
}
  ngOnInit(): void {

  }
}
