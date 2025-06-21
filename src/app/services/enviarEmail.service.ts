import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class EnviarEmailService {
  private apiUrl = environment.apiURL + '/api/email';

  constructor(private http: HttpClient) {}

  esqueceuSenha(email: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/email-recuperacao-senha`, { email });
  }

  enviarEmail(email: string): Observable<any> {
  
    return this.http.post(`${this.apiUrl}/email-recuperacao-senha`, { email });
  }
  enviarEmailCadastro(email: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/confirmar-cadastro`, { email });
  }
}
