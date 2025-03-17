import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, ReplaySubject } from 'rxjs';
import { User } from 'src/app/pages/components/login/login.component';

const CHAVE_ACCESS_TOKEN = 'access_token';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  private apiUrl = environment.apiUrl + '/api/Usuario';
  private user: User | null = null;

  constructor(private http: HttpClient) {
    this.restaurarSessao();
  }

  restaurarSessao() {
    const jsonSessao = sessionStorage.getItem(CHAVE_ACCESS_TOKEN);
    if (jsonSessao) {
      this.user = JSON.parse(jsonSessao);
    }
  }

  salvarSessao(usuario: User) {
    sessionStorage.setItem(CHAVE_ACCESS_TOKEN, JSON.stringify(usuario));
  }

  login(credentials: { email: string; password: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, credentials);
  }

  cadastrar(account: {
    nome: string;
    email: string;
    password: string;
  }): Observable<any> {
    return this.http.post(`${this.apiUrl}/cadastrar`, account);
  }

  esqueceuSenha(email: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/esqueceuSenha`, { email });
  }

  resetarSenha(token: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/resetarSenha`, { token, password });
  }

  updateUser(
    userId: string,
    userData: { name: string; email: string }
  ): Observable<any> {
    return this.http.put(`${this.apiUrl}/user/${userId}`, userData);
  }

  estaAutenticado(): boolean {
    return !!localStorage.getItem('token');
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  setUser(user: User): void {
    this.user = user;
  }

  getUser(): User | null {
    return this.user;
  }
}
