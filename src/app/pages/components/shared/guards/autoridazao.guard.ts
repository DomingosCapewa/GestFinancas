import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UsuarioService } from 'src/app/services/auth/usuario.service';

@Injectable({
  providedIn: 'root'
})
export class AutoridazaoGuard implements CanActivate {

  constructor(private usuarioService: UsuarioService, private router: Router) {
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  if (this.usuarioService.estaAutenticado()) {
    return true;
  } else {
    this.router.navigate(['/login']);
    return false;
  }
}
}
