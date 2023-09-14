import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/services/blog.service';
import { NgxSpinnerService } from 'ngx-spinner'; // https://www.npmjs.com/package/ngx-spinner

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  blogPosts: any;
  id!: string;
  errorMessage: any;
  constructor(
    private blogService: BlogService,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit() {
    this.getPosts();
  }

  getPosts() {
    this.spinner.show();

    this.blogService.getPosts().subscribe(
      (data) => {
        this.blogPosts = data;
        console.log(this.blogPosts);
        this.spinner.hide();
      },
      (error) => {
        // if any error, Code throws the error
        this.errorMessage = error.error.message;
        console.log(error.error.message, 'error');

        this.spinner.hide();
      }
    );
  }
}
