import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { inject } from '@angular/core/testing';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import * as e from 'cors';
import { randomInt } from 'crypto';
import { Observable } from 'rxjs';
import { UsuarioService } from 'src/app/services/auth/usuario.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  userObj: User = new User();

  // cidadeList$: Observable<string[]> = new Observable<string[]>();

  userList: User[] = [];

  register = {
    nome: '',
    email: '',
    password: '',
  };
  formRegister!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private usuarioService: UsuarioService,
    private router: Router,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.formRegister = new FormGroup({
      nome: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
    });
    // this.cidadeList$ = this.http.get<string[]>(
    //   'http://localhost:3000/cidadeList'
    // );

    //caso precise adicionar uma selecao de cidades
  }

  getCidade() {
    this.http
      .get<string[]>('http://localhost:3000/cidadeList')
      .subscribe((res: string[]) => {});
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

  async onSubmit() {}

  cadastrar() {
    if (this.formRegister.valid) {
      {
        this.http
          .post<User>('http://localhost:3000/userList', this.userObj)
          .subscribe((res: User) => {
            alert('Usuário cadastrado com sucesso!');

            this.router.navigate(['/home']);
          });
      }
    } else {
      alert('Erro ao cadastrar usuário');
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
    this.id = Math.random();
    this.nome = '';
    this.email = '';
    this.password = '';
    this.cidade = '';
    this.estado = '';
  }
}
