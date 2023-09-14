import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './pages/blog/blog.component';
import { BlogPostsComponent } from './pages/blog-posts/blog-posts.component';
import { AboutComponent } from './pages/about/about.component';


const routes: Routes = [
  {path: '', component: BlogComponent},
  {path: 'post/:id', component: BlogPostsComponent},
  {path: 'about', component: AboutComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
