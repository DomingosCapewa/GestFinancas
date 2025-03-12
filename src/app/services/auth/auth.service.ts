import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const auth_api = 'http://localhost:3000/auth/';

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
      auth_api + 'signin',
      { email, password },
      httpOptions
    );
  }

  register(name: string, email: string, password: string): Observable<any> {
    return this.http.post(
      auth_api + 'signup',
      { name, email, password },
      httpOptions
    );
  }
}
