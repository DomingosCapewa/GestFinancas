import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/auth/usuario.service';
import { EnviarEmailService } from './../../../services/enviarEmail.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  formRegister!: FormGroup;

  constructor(private router: Router, private usuarioService: UsuarioService, enviarEmailService: EnviarEmailService) {}

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
      const userObj = {
        nome: this.nome.value,
        email: this.email.value,
        senha: this.senha.value,
      };

      this.usuarioService.cadastrar(userObj).subscribe(
        (response) => {
          console.log('Cadastro realizado com sucesso', response);

          this.router.navigate(['/home']);
        },
        (error) => {
          console.error('Erro no cadastro', error);
          alert('Erro ao cadastrar o usuário');
        }
      );
    } else {
      console.log('Formulário inválido');
      alert('Por favor, preencha todos os campos corretamente');
    }
  }
}
