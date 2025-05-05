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

  async onsubmit() {
    this.login();
  }

  login() {
    if (this.formLogin.valid) {
      if (this.usuarioService.estaAutenticado()) {
        console.log('Usuário já está autenticado');
        this.router.navigate(['/home']);
        return;
      }
      // console.log('Enviando para o backend:', this.formLogin.value);

      // Confirma que os dados de email e senha estão sendo enviados corretamente
      this.usuarioService.login(this.email.value, this.senha.value).subscribe(
        (response) => {
          console.log('Login realizado com sucesso', response);
          this.router.navigate(['/home']);
        },
        (error) => {
          console.error('Erro no login', error);
        }
      );
    }
  }
  loginCheck() {
    if (this.usuarioService.estaAutenticado()) {
      console.log('Usuário já está autenticado');
      this.router.navigate(['/home']);
    } else {
      console.log('Usuário não autenticado');
    }
  }
}
