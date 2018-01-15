import { SidebarService } from './services/sidebar.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PagesComponent } from './components/pages/pages.component';

import { PageService } from './services/page.service';
import { Title } from '@angular/platform-browser';
import { UserService } from './services/user.service';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';


const appRoutes: Routes = [
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'logout', component: LogoutComponent},
  // {path: 'admin/pages', component: AdminPagesComponent},
  // {path: 'admin/add-page', component: AdminAddPageComponent},
  // {path: 'admin/edit-page/:id', component: AdminEditPageComponent},
  // {path: 'admin/sidebar', component: AdminSidebarComponent},
  {path: ':page', component: PagesComponent},
  {path: '', component: PagesComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PagesComponent,
    RegisterComponent,
    LoginComponent,
    LogoutComponent,

  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
      PageService,
      Title,
      UserService,
      SidebarService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
