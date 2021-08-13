import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: 'home', component: HomeComponent, pathMatch: 'full',data:  { animationState: 'Home' }},
  { path: 'about', component: AboutComponent, pathMatch: 'full',data:  { animationState: 'About' } },
  
];
@NgModule({
  imports: [RouterModule.forRoot(routes),RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled', // Add options right here
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
