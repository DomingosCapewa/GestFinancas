import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'GestFinancas';

  estaLogado() {
    if (window.localStorage.getItem('token')) {
      return true;
    } else {
      return false;
    }
  }
}
