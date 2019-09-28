import { Component, Input } from '@angular/core';
import { Post } from '../post.model';

@Component({
selector:'app-post-list',
templateUrl: './post-list.component.html',
styleUrls: ['./post-list.component.scss'] 
})

export class PostListComponent{
    // posts=[
    //     {title: 'First Post', content: 'blah blag blalsdkfka'},
    //     {title: 'Second Post', content: 'blah blag blalsdkfka'},
    //     {title: 'Third Post', content: 'blah blag blalsdkfka'}
    // ]
    @Input() posts: Post[] = [];

}