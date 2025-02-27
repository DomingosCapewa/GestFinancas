import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-resetar-senha',
  templateUrl: './resetar-senha.component.html',
  styleUrls: ['./resetar-senha.component.scss']
})
export class ResetarSenhaComponent implements OnInit {
  formResetarSenha!: FormGroup;

  constructor() { }

  ngOnInit(): void {
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
