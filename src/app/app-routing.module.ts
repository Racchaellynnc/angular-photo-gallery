import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home/homepage/homepage';
import { ProfileComponent } from './profile/profile/profile';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  // { path: 'graphics', component: GraphicsPage },
  // { path: 'photography', component: PhotographyPage},
  // { path: 'sign-in-page', component: SignInPage },
  // { path: 'sign-up-page', component: SignUpPage },
  { path: 'profile', component: ProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
