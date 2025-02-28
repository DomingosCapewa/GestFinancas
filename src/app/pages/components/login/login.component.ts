import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { UsuarioService } from 'src/app/services/auth/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  formRegister!: FormGroup;
  userEmail: string = '';
  userPassword: string = '';
  errorMessage: string = '';

  constructor(private fb: FormBuilder, private http: HttpClient,  private usuarioService: UsuarioService) {}

  ngOnInit(): void {
    this.formRegister = this.fb.group({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
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

  login(): void {
    return;
  }
}
