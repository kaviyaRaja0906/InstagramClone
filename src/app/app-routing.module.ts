import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsComponent } from './posts/posts.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ViewPostsComponent } from './view-posts/view-posts.component';

const routes: Routes = [
  {path:'',component: PostsComponent},
  {path:'view/:id',component: ViewPostsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes
    ,{enableTracing:true}
    )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
