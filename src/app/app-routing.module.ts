import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { UsersComponent } from './pages/users/users.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { UserbyadminComponent } from './pages/userbyadmin/userbyadmin.component';
import { ErrorComponent } from './pages/error/error.component';

const routes: Routes = [
  {path: '', redirectTo:'home', pathMatch:'full', title: 'Home'},
  {path: 'home', component: HomeComponent, title: 'Home'},
  {path: 'about', component: AboutComponent, title: 'About'},
  {path: 'contact', component: ContactComponent, title: 'Contant'},
  {path: 'users', component: UsersComponent, title: 'Users'},
  {path: 'userbyadmin', component: UserbyadminComponent, title: 'Users Added by Admin'},
  {path: 'login', component: LoginComponent, title: 'Login'},
  {path: 'signup', component: SignupComponent, title: 'SignUp'},
  {path: '**', component: ErrorComponent, title: 'Error'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
