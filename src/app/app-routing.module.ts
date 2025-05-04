import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/components/login/login.component';
import { RegisterComponent } from './pages/components/register/register.component';
import { ResetarSenhaComponent } from './pages/components/resetar-senha/resetar-senha.component';
import { EsqueceuSenhaComponent } from './pages/components/esqueceu-senha/esqueceu-senha.component';
import { AuthenticationComponent } from './pages/components/authentication/authentication.component';
import { AuthGuard } from './pages/components/shared/guards/auth.guard';
import { HomeComponent } from './pages/components/home/home.component';
import { RecuperarSenhaComponent } from './pages/components/recuperar-senha/recuperar-senha.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [{ path: 'home', component: HomeComponent }],
    canActivate: [AuthGuard],
  },
  {
    path: '',
    component: AuthenticationComponent,
    children: [
      { path: '', redirectTo: '/login', pathMatch: 'full' },
      { path: 'login', component: LoginComponent },
      { path: 'cadastrar', component: RegisterComponent },
      { path: 'esqueceuSenha', component: EsqueceuSenhaComponent },
      { path: 'resetarSenha', component: ResetarSenhaComponent },
      { path: 'recuperar-senha', component: RecuperarSenhaComponent }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
