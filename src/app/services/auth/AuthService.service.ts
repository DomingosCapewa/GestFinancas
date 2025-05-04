import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { Usuario } from 'src/app/models/identity/Usuario';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private currentUserSubject: BehaviorSubject<Usuario | null>;
  public currentUser: Observable<Usuario | null>;
  private apiUrl: string = environment.apiURL;


  constructor(private http: HttpClient) {

    const currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');


    this.currentUserSubject = new BehaviorSubject<Usuario | null>(currentUser);


    this.currentUser = this.currentUserSubject.asObservable();
  }

  login(email: string, senha: string): Observable<any> {
    return this.http.post<any>(this.apiUrl + 'login', { email, senha }).pipe(
      map((response) => {
        if (response && response.token) {
          localStorage.setItem('currentUser', JSON.stringify(response));

          this.currentUserSubject.next(response);
        }
        return response;
      })
    );
  }

  logout() {

    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }
}
