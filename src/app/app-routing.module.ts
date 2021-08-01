import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GettingStartedComponent } from './components/getting-started/getting-started.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path: 'bio',  component: HomeComponent },
  {path: 'bio/:name',  component: HomeComponent },
  {path: '404', component: HomeComponent},
  {path: 'get', component: GettingStartedComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
