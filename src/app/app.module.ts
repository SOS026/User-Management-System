import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { UsersComponent } from './pages/users/users.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { ToastrModule} from 'ngx-toastr';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ApiService } from './service/api.service';
import { UserbyadminComponent } from './pages/userbyadmin/userbyadmin.component';
import { SearchComponent } from './pages/search/search.component';
import { CustompipePipe } from './pages/custompipe.pipe';
import { HoverDirective } from './pages/custom directive/hover.directive';
import { OhoverDirective } from './pages/custom directive/ohover.directive';
import { ErrorComponent } from './pages/error/error.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    LoginComponent,
    SignupComponent,
    UsersComponent,
    NavbarComponent,
    UserbyadminComponent,
    SearchComponent,
    CustompipePipe,
    HoverDirective,
    OhoverDirective,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    ToastrModule.forRoot()
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
