import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  private apiUrl = environment.apiUrl + '/api/Usuario';

  constructor(private http: HttpClient) {}

  cadastrar(account: {
    nome: string;
    email: string;
    senha: string;
  }): Observable<any> {
    return this.http.post(`${this.apiUrl}`, account);
  }

  login(email: string, senha: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, { email, senha });
  }
}
