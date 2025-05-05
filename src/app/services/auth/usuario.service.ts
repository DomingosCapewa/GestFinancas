import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  // Corrected string interpolation for apiUrl
  private apiUrl = `${environment.apiURL}/api/Usuario`;

  constructor(private http: HttpClient) {}

  estaAutenticado(): boolean {
    const token = localStorage.getItem('token');
    return token !== null && token !== undefined;
  }
  autorizar(): boolean {
    localStorage.setItem('token', 'true');
    return true;
  }
  // Método para cadastrar um novo usuário
  cadastrar(account: {
    nome: string;
    email: string;
    senha: string;
  }): Observable<any> {
    console.log('Calling endpoint:', `${this.apiUrl}`);
    const token = localStorage.setItem('token', 'true');
    return this.http
      .post(`${this.apiUrl}/cadastrar-usuario`, account)
      .pipe(map((response) => response));
  }

  // Método para login
  login(email: string, senha: string): Observable<any> {
    localStorage.setItem('token', 'true');
    return this.http
      .post(`${this.apiUrl}/login`, { email, senha })
      .pipe(map((response) => response));
  }

  // Método para esquecer a senha
  esqueceuSenha(email: string): Observable<any> {
    return this.http
      .post(`${this.apiUrl}/esqueceu-senha`, { email })
      .pipe(map((response) => response));
  }

  // Método para resetar a senha
  resetPassword(data: {
    password: string;
    passwordConfirm: string;
  }): Observable<any> {
    return this.http
      .post(`${this.apiUrl}/resetar-senha`, data)
      .pipe(map((response) => response));
  }

  // Método para confirmar o reset da senha
  confirmarResetSenha(data: {
    password: string;
    passwordConfirm: string;
  }): Observable<any> {
    return this.http
      .post(`${this.apiUrl}/confirmar-reset-senha`, data)
      .pipe(map((response) => response));
  }
  logout(): void {
    return localStorage.clear();
  }

  refreshToken(): Observable<any> {
    return this.http
      .post(`${this.apiUrl}/refresh-token`, {})
      .pipe(map((response) => response));
  }
  getToken(): string | null {
    return localStorage.getItem('token');
  }
}
