// import { HTTP_INTERCEPTORS, HttpEvent } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import {
//   HttpInterceptor,
//   HttpHandler,
//   HttpRequest,
// } from '@angular/common/http';

// import { Observable } from 'rxjs';
// import { TokenStorageService } from '../services/auth/token-storage.service';

// const TOKEN_HEADER_KEY = 'Authorization';

// @Injectable()
// export class AutentInterceptor implements HttpInterceptor {
//   constructor(private token: TokenStorageService) {}

//   intercept(
//     req: HttpRequest<any>,
//     next: HttpHandler
//   ): Observable<HttpEvent<any>> {
//     let authReq = req;
//     const token = this.token.getToken();
//     if (token != null) {
//       authReq = req.clone({
//         headers: req.headers.set(TOKEN_HEADER_KEY, 'Bearer ' + token),
//       });
//     }
//     return next.handle(authReq);
//   }
// }

// export const authInterceptorProviders = [
//   { provide: HTTP_INTERCEPTORS, useClass: AutentInterceptor, multi: true },
// ];

// //intercept() pega HttpRequest e HttpHandler e retorna um Observable<HttpEvent<any>>.
// //O método verifica se o token está disponível e, se estiver, adiciona-o ao cabeçalho da solicitação.
