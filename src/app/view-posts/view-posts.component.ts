import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from "@angular/common/http";
import {RouterModule, Router, ActivatedRoute, ParamMap } from '@angular/router';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormsModule } from "@angular/forms";
import posts from "../posts.json";

@Component({
  selector: 'app-view-posts',
  templateUrl: './view-posts.component.html',
  styleUrls: ['./view-posts.component.css']
})
export class ViewPostsComponent implements OnInit {
  numberOfLikes=0;
  id:any;
  img:any;
  caption:any;
  posts:any;
  likes:any;
  likeCount:any;
  show:boolean =false;

  public postList:{id:number;img: string;caption:string;likes:number;}[] = posts;

  constructor(private http:HttpClient,private router:Router,private route:ActivatedRoute) { }
  like(event:any){
    this.likeCount=sessionStorage.getItem("likes");
   this.likes=this.postList[event].likes++;

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
    this.id = this.route.snapshot.params['id'];
    sessionStorage.setItem("id",this.id);
    this.img = this.postList[this.id].img;
    this.caption = this.postList[this.id].caption;
    this.likes = this.postList[this.id].likes;
    sessionStorage.setItem("likes",this.likes);
    console.log(this.id,this.likes);
  }

}
