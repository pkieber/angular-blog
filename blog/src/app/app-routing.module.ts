import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './pages/blog/blog.component';
import { BlogPostsComponent } from './pages/blog-posts/blog-posts.component';


const routes: Routes = [
  {path: '', component: BlogComponent},
  {path: 'single-post:id', component: BlogPostsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
