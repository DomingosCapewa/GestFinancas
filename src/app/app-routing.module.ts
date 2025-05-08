import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/components/login/login.component';
import { RegisterComponent } from './pages/components/register/register.component';
import { ResetarSenhaComponent } from './pages/components/resetar-senha/resetar-senha.component';
import { EsqueceuSenhaComponent } from './pages/components/esqueceu-senha/esqueceu-senha.component';

import { HomeComponent } from './pages/components/home/home.component';
import { RecuperarSenhaComponent } from './pages/components/recuperar-senha/recuperar-senha.component';
import { AutoridazaoGuard } from './pages/components/shared/guards/autoridazao.guard';
import { PerfilComponent } from './pages/components/perfil/perfil.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'cadastrar', component: RegisterComponent },
  {path : 'home', component: HomeComponent, canActivate: [AutoridazaoGuard]},
  {path: 'perfil', component: PerfilComponent, canActivate: [AutoridazaoGuard]},
  { path: 'esqueceuSenha', component: EsqueceuSenhaComponent },
  { path: 'resetarSenha', component: ResetarSenhaComponent },
  { path: 'recuperar-senha', component: RecuperarSenhaComponent },
  { path: '**', redirectTo: '/login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
