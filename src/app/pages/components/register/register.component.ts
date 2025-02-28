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
    private fb: FormBuilder,
    private usuarioService: UsuarioService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.formRegister = new FormGroup({
      nome: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
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
    this.register(); 
  }

  register(): void {
    const user = {
      name: this.formRegister.value.nome,
      email: this.formRegister.value.email,
      password: this.formRegister.value.password,
    };

    this.usuarioService.register(user).subscribe((data) => {
      console.log(data);
      this.router.navigate(['/login']);
    });
  }
}
