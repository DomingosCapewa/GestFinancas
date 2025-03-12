import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { env } from 'process';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';

const api_url = environment.apiUrl;
@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  getPublicContent(): Observable<any> {
    return this.http.get(api_url + 'all', { responseType: 'text' });
  }

  getUserBoard(): Observable<any> {
    return this.http.get(api_url + 'user', { responseType: 'text' });
  }

  getModeratorBoard(): Observable<any> {
    return this.http.get(api_url + 'mod', { responseType: 'text' });
  }

  getAdminBoard(): Observable<any> {
    return this.http.get(api_url + 'admin', { responseType: 'text' });
  }
}
