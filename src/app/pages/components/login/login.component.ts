import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  formRegister!: FormGroup;

  constructor() {}

  ngOnInit(): void {}

  get email() {
    return this.formRegister.get('email')!;
  }

  get password() {
    return this.formRegister.get('password')!;
  }

  submit() {
    if (this.formRegister.invalid) {
      console.log('Formulário inválido');
      return;
    }
    console.log('Formulário válido', this.formRegister.value);
  }
}
