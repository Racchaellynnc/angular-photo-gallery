import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

@Component({
selector:'photo',
templateUrl: './photo-upload.html',
styleUrls: ['./photo-upload.scss'] 
})

export class PhotoUpload{
    selectedFile = null;

    constructor(private http: HttpClient){}

    onFileSelected(event){
    this.selectedFile = event.target.files[0];
    }

    onUpload(){

        // this.http.post('')
    }
}