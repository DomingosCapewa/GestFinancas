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
  login = {
    email: '',
    password: '',
  };
  formLogin!: FormGroup;
  // userEmail: string = '';
  // userPassword: string = '';
  // errorMessage: string = '';

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private usuarioService: UsuarioService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.formLogin = this.fb.group({
      email: new FormControl('', Validators.required),
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
    try {
      const result = await this.usuarioService.login(this.login);
      console.log(`Login efetuado: ${result}`);

      //Navego para a rota vazia novamente

      this.router.navigate(['/']);
    } catch (error) {
      console.error(error);
    }
  }
}
export class User {
  id: number;
  nome: string;
  email: string;
  password: string;
  cidade: string;
  estado: string;

  constructor() {
    this.id = 0;
    this.nome = '';
    this.email = '';
    this.password = '';
    this.cidade = '';
    this.estado = '';
  }
}
