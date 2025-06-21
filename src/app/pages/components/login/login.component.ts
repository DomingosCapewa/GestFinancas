import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/auth/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  formLogin!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private usuarioService: UsuarioService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.formLogin = this.fb.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      senha: new FormControl('', Validators.required),
    });
  }

  get email() {
    return this.formLogin.get('email')!;
  }

  get senha() {
    return this.formLogin.get('senha')!;
  }

  onsubmit() {
    if (!this.formLogin.valid) {
      console.warn('Formulário inválido', this.formLogin.errors);
      return;
    }

    const { email, senha } = this.formLogin.value;

    if (this.usuarioService.estaAutenticado()) {
      console.log('Usuário já está autenticado');
      this.router.navigate(['/home']);
      return;
    }

    this.usuarioService.login(email, senha).subscribe({
      next: (response) => {
        console.log('Login realizado com sucesso', response); 
        this.router.navigate(['/home']);
        alert('Login bem-sucedido! Redirecionando...');
        this.router.navigate(['/home']);
      },
      error: (error) => {
        console.error('Erro no login', error);
        alert('Falha no login: ' + (error.error?.message || error.message));
      },
    });
  }
}
