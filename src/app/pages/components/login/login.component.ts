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
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  userObj: User = new User();
  formLogin!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private usuarioService: UsuarioService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.formLogin = this.fb.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
    });
  }

  get email() {
    return this.formLogin.get('email')!;
  }

  get password() {
    return this.formLogin.get('password')!;
  }

  async onsubmit() {
    const email = this.formLogin.value.email;
    const password = this.formLogin.value.password;

    try {
      const users = await this.http.get<User[]>('http://localhost:3000/userList').toPromise();
      const user = users?.find(
        (u) => u.email === email && u.password === password
      );
      if (user) {
        this.usuarioService.setUser(user);
        this.router.navigate(['/home']);
      } else {
        alert('Usuário ou senha inválidos');
      }
    } catch (error) {
      alert('Erro ao fazer login');
    }
  }
}

export class User {
  email: string = '';
  password: string = '';
}
