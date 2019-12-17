import { Component, EventEmitter, Output } from '@angular/core';
import { Post } from '../post.model';
import { Form, NgForm } from "@angular/forms";

@Component({
selector:'app-post-create',
templateUrl: './post-create.component.html',
styleUrls: ['./post-create.component.scss'] 
})
export class PostCreateComponent {
   enteredContent = '';
   enteredTitle = '';
   @Output() postCreated = new EventEmitter<Post>();
   onAddPost(forms: NgForm) {
      if (forms.invalid){
         return;
      }
     const post: Post = {
         title: forms.value.title, 
         content: forms.value.content 
      };
      this.postCreated.emit(post);
   } 
}