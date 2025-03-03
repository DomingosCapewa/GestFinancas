import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, ReplaySubject } from 'rxjs';
// import { Usuario } from 'src/app/models/identity/Usuario';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  private apiUrl = environment.apiUrl;
  // private currentUserSource = new ReplaySubject<Usuario>(1);

  constructor(private http: HttpClient) {}

  getUser(): Observable<any> {
    return this.http.get(`${this.apiUrl}/user`);
  }

  login(credentials: { email: string; password: string }) {
    return this.http.post(`${this.apiUrl}/login`, credentials).subscribe(
      (res: any) => console.log('Login realizado com sucesso!', res),
      (err: any) => console.log('Erro ao realizar login', err)
    );
  }

  register(user: {
    name: string;
    email: string;
    password: string;
  }): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, user);
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
}
