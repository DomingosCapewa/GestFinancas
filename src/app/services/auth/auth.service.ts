import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const api_url =  environment.apiUrl;

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    return this.http.post(
      api_url + 'signin',
      { email, password },
      httpOptions
    );
  }

  cadastrar(name: string, email: string, password: string): Observable<any> {
    return this.http.post(
      api_url + 'signup',
      { name, email, password },
      httpOptions
    );
  }
}
