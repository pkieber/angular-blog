import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  /*
  projects = [{
    name: 'Project One',
    description: 'This is the description for the first project.'
  }, {
    name: 'Project Two',
    description: 'This is the description for the second project.'
  }, {
    name: 'Project Three',
    description: 'Description for third project.'
  }];
  */

  constructor(private blogService: BlogService) { }

  ngOnInit() {
    this.getPosts();
  }

  getPosts() {
    this.blogService.getPosts().subscribe(
      data => {
        console.log(data);
      }
    )
  }

}
