import { Component } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent {

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

  constructor() { }

  ngOnInit() {
  }

}
