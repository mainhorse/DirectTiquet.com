import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {UsuarioService} from './servicios/usuario.service';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';



import { HomeComponent } from './home/home/home.component';
import { SearchNavComponent } from './home/search-nav/search-nav.component';
import { NetworksSocialsComponent } from './home/networks-socials/networks-socials.component';
import { SelectOptionsComponent } from './home/select-options/select-options.component';
import { RegisterComponent } from './home/register/register.component';
import { LoginComponent } from './home/login/login.component';
import { HomeOptionsUserComponent } from './home/home-options-user/home-options-user.component';
import { HomeOptionChooseComponent } from './home/home-option-choose/home-option-choose.component';
import { HomeRegisterComponent } from './home/home-register/home-register.component';
import { HomeLoginComponent } from './home/home-login/home-login.component';
import { NavUsuarioComponent } from './usuario/nav-usuario/nav-usuario.component';
import { MainUsuarioComponent } from './usuario/main-usuario/main-usuario.component';
import { UsuarioPageComponent } from './usuario/usuario-page/usuario-page.component';
import {FooterUsuarioComponent} from './usuario/footer-usuario/footer-usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchNavComponent,
    NetworksSocialsComponent,
    SelectOptionsComponent,
    RegisterComponent,
    LoginComponent,
    HomeOptionsUserComponent,
    HomeOptionChooseComponent,
    HomeRegisterComponent,
    HomeLoginComponent,
    NavUsuarioComponent,
    MainUsuarioComponent,
    UsuarioPageComponent,
    FooterUsuarioComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    
  ],
  providers: [UsuarioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
