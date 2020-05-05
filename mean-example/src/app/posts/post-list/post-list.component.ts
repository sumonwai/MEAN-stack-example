import { Component, Input, OnInit } from '@angular/core'
import { Post } from '../post.model';
import { PostsService } from '../posts.service';
import { Subscription } from "rxjs";

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  @Input() posts: Post[] = [];
  private postsSub: Subscription;
  constructor(public postsService: PostsService) {}

  ngOnInit(): void {
    // Initialze to first start.
    this.posts = this.postsService.getPosts();

    // Listener subscribe (functionCallWhenComplete)
    // This live forever, use internal logic to
    this.postsSub = this.postsService.getPostUpdateListener().subscribe((posts: Post[]) => {
      this.posts = posts;
    });


  }

  // Cleanup memory
  ngOnDestroy() {
    this.postsSub.unsubscribe();
  }
}
