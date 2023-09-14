import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './components/blog/blog.component';
import { SinglePostComponent } from './components/single-post/single-post.component';

const routes: Routes = [
  {path: 'blogs', component: BlogComponent},
  {path: 'blogs/:id', component: SinglePostComponent}
  {path: '**', redirectTo: 'blogs', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
