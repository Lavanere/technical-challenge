import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import   
 { HomeComponent } from './home/home.component';
import { Challenge1Component } from './challenge1/challenge1.component';
import { Challenge2Component } from './challenge2/challenge2.component';
import { Challenge3Component } from './challenge3/challenge3.component';
import { Challenge4Component } from './challenge4/challenge4.component';
import { Challenge5Component } from './challenge5/challenge5.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent},
  { path: 'challenge1', component: Challenge1Component},
  { path: 'challenge2', component: Challenge2Component},
  { path: 'challenge3', component: Challenge3Component},
  { path: 'challenge4', component: Challenge4Component},
  { path: 'challenge5', component: Challenge5Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

