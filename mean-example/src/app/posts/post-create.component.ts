import { Component, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent {
  newPost = 'No Content';
  enteredValue = '';
  enteredTitleValue = '';
  @Output() postCreated = new EventEmitter();

  onAddPost() {
    const post = {title: this.enteredTitleValue, content: this.enteredValue};
    console.log('OnAddPost:' + post);
    this.postCreated.emit(post);
  }
}
