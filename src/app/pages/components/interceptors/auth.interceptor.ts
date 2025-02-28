import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { UsuarioService } from 'src/app/services/auth/usuario.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private usuarioService: UsuarioService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token = this.usuarioService.getToken();
    if (token) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`, // Adiciona o token de autenticação no cabeçalho da requisição
        },
      });
    }
    return next.handle(request);
  }
}
