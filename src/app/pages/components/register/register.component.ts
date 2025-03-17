import { HttpClient } from '@angular/common/http';
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
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  formRegister!: FormGroup;

  constructor(
    private router: Router,
    private http: HttpClient,
    private usuarioService: UsuarioService
  ) {}

  ngOnInit(): void {
    this.formRegister = new FormGroup({
      nome: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      senha: new FormControl('', Validators.required),
    });
  }

  get nome() {
    return this.formRegister.get('nome')!;
  }

  get email() {
    return this.formRegister.get('email')!;
  }

  get senha() {
    return this.formRegister.get('senha')!;
  }

  async onSubmit() {
    this.cadastrar();
  }

  cadastrar() {
    if (this.formRegister.valid) {
      // Preencher o objeto com os valores do formulário
      const userObj = {
        nome: this.nome.value,
        email: this.email.value,
        password: this.senha.value,
      };
      // Enviar o objeto para o backend
      this.usuarioService.cadastrar(userObj).subscribe(
        (response) => {
          console.log('Cadastro realizado com sucesso', response);
          // Redirecionar para a página de login ou outra página após o sucesso
          this.router.navigate(['/login']);
        },
        (error) => {
          console.error('Erro no cadastro', error);
        }
      );
    } else {
      console.log('Formulário inválido');
    }
  }
}
