import { Post } from "./post.model";
import { Injectable } from '@angular/core';
import { Subject } from "rxjs";

@Injectable({providedIn: 'root'})
export class PostsService {
  private posts: Post[] = [];

  // This is to send
  private postUpdated = new Subject<Post[]>();

  getPosts() {
    return [...this.posts];
  }

  getPostUpdateListener() {
    return this.postUpdated.asObservable();
  }

  addPost(title: string, content: string) {
    this.posts.push({title: title, content: content});
    this.postUpdated.next([...this.posts]);
  }
}
