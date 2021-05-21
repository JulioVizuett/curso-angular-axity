import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { DessertComponent } from './dessert/dessert.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'postre',
    component: DessertComponent
  },
  {
    path: 'postre/:id',
    component: DessertComponent
  },
  {
    path: '**',
    redirectTo: 'login'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
