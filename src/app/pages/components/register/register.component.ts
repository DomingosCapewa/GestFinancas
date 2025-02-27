import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  formRegister!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.formRegister = new FormGroup({
      nome: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }

  get nome() {
    return this.formRegister.get('nome')!;
  }

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
