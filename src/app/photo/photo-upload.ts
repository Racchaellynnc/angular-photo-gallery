import { Component } from '@angular/core';

@Component({
selector:'photo',
templateUrl: './photo-upload.html',
styleUrls: ['./photo-upload.scss'] 
})

export class PhotoUpload{
    onFileSelected(event){
    console.log(event);
    }
}