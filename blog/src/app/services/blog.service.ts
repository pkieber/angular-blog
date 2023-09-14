import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Observable, Observer, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  private blogUrl = 'https://example.com'; // My URL

  constructor(private http: HttpClient) {}


  // See WP-Documentation: https://developer.wordpress.org/rest-api/reference/posts/
  getPosts() {
    const url = `${this.blogUrl}/wp-json/wp/v2/posts`; // API
    console.log(url);
    return this.http.get(url).pipe(catchError(this.errorHandler));
  }

  getSinglePost(id: any) {
    const url = `${this.blogUrl}/wp-json/wp/v2/posts/${id}`; // API, with ID
    console.log(url);
    return this.http.get(url).pipe(catchError(this.errorHandler));
  }


  errorHandler(error: HttpErrorResponse) {
    return new Observable((observer: Observer<any>) => {
      observer.error(error);
    });
  }
}
