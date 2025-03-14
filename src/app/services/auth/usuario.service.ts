import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, ReplaySubject } from 'rxjs';
import { User } from 'src/app/pages/components/login/login.component';
// import { Usuario } from 'src/app/models/identity/Usuario';

const CHAVE_ACCESS_TOKEN = 'access_token';
@Injectable({
  providedIn: 'root',
})
export class UsuarioService {

  private apiUrl = environment.apiUrl;
  // private currentUserSource = new ReplaySubject<Usuario>(1);

  constructor(private http: HttpClient) {
    this.restaurarSessao();
  }

  restaurarSessao() {
    const jsonSessao = sessionStorage.getItem(
      CHAVE_ACCESS_TOKEN
    );
    if (jsonSessao) {
      // const usuario: Usuario = JSON.parse(jsonSessao);
      // this.currentUserSource.next(usuario);
      return;
    }

    const dadosSessao = localStorage.getItem(
      CHAVE_ACCESS_TOKEN);
  }

   salvarSessao(usuario: User) {
    sessionStorage.setItem(
      CHAVE_ACCESS_TOKEN, JSON.stringify(usuario)
    );
   }

  login(user: any): Promise<boolean> {
    return new Promise((resolve) => {
      window.localStorage.setItem('token', 'meu-token');
      resolve(true);
    });
  }

  register(account: any): Promise<boolean> {
    return new Promise((resolve) => {
      window.localStorage.setItem('token', 'meu-token');
      resolve(true);
    });
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
  private user: User | null = null;

  setUser(user: User): void {
    this.user = user;
  }

  getUser(): User | null {
    return this.user;
  }
}
