import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsuarioService } from 'src/app/services/auth/usuario.service';

@Component({
  selector: 'app-resetar-senha',
  templateUrl: './resetar-senha.component.html',
  styleUrls: ['./resetar-senha.component.scss'],
})
export class ResetarSenhaComponent implements OnInit {
  formResetarSenha!: FormGroup;

  constructor(private usuarioService: UsuarioService) {}

  ngOnInit(): void {
    this.formResetarSenha = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }

  get email() {
    return this.formResetarSenha.get('email')!;
  }

  get password() {
    return this.formResetarSenha.get('password')!;
  }

  submit() {
    if (this.formResetarSenha.invalid) {
      console.log('Formulário inválido');
      return;
    }
    console.log('Formulário válido', this.formResetarSenha.value);
  }

}
