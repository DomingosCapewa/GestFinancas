import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { UsuarioService } from 'src/app/services/auth/usuario.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private router: Router, usuarioServoce : UsuarioService) {}

  ngOnInit(): void {}
  logout() {
localStorage.clear();
    this.router.navigate(['/login']);
  }
}
