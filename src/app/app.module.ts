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

import { HomeComponent } from './pages/components/home/home.component';
import { PerfilComponent } from './pages/components/perfil/perfil.component';
// import { NavbarComponent } from './pages/components/navbar/navbar.component';
import { RecuperarSenhaComponent } from './pages/components/recuperar-senha/recuperar-senha.component';
import { NavBarComponent } from './pages/components/shared/nav-bar/nav-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ResetarSenhaComponent,
    EsqueceuSenhaComponent,
    HomeComponent,
    PerfilComponent,
    RecuperarSenhaComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
