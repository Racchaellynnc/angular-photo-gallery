import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http'
import { 
  MatInputModule, 
  MatCardModule, 
  MatButtonModule,
  MatToolbarModule,
  MatExpansionModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home/homepage/homepage';
import { ProfileComponent } from './profile/profile/profile';
import { PostCreateComponent } from './profile/posts/post-create/post-create.component';
import { PhotosComponent } from './home/photos/photos.component';
import { PostListComponent } from './profile/posts/post-list/post-list.component';
import { PhotoUpload } from './profile/photo/photo-upload';




@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    PostCreateComponent,
    PostListComponent,
    PhotoUpload,
    PhotosComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
