import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/components/login/login.component';
import { RegisterComponent } from './pages/components/register/register.component';
import { ResetarSenhaComponent } from './pages/components/resetar-senha/resetar-senha.component';
import { EsqueceuSenhaComponent } from './pages/components/esqueceu-senha/esqueceu-senha.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'cadastrar', component: RegisterComponent },
  { path: 'esqueceuSenha', component: EsqueceuSenhaComponent },
  { path: 'resetarSenha', component: ResetarSenhaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
