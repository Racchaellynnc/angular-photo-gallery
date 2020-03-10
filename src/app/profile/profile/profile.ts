import { Component, Input } from '@angular/core';
import '../../app.component';

import { Post } from '../posts/post.model';

@Component({
    selector: 'profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.styes.scss']
})


export class ProfileComponent {
    storedPosts: Post[] = [];

    onPostAdded(post) {
        this.storedPosts.push(post);
    }
}