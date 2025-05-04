import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/components/login/login.component';
import { RegisterComponent } from './pages/components/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ResetarSenhaComponent } from './pages/components/resetar-senha/resetar-senha.component';
import { EsqueceuSenhaComponent } from './pages/components/esqueceu-senha/esqueceu-senha.component';
import { AuthenticationComponent } from './pages/components/authentication/authentication.component';
import { HomeComponent } from './pages/components/home/home.component';
import { PerfilComponent } from './pages/components/perfil/perfil.component';
// import { NavbarComponent } from './pages/components/navbar/navbar.component';
import { RecuperarSenhaComponent } from './pages/components/recuperar-senha/recuperar-senha.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ResetarSenhaComponent,
    EsqueceuSenhaComponent,
    AuthenticationComponent,
    HomeComponent,
    PerfilComponent,

    RecuperarSenhaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
