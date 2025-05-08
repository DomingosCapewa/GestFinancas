import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/identity/Usuario';
import { UsuarioService } from 'src/app/services/auth/usuario.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {
  imagemURL: string = 'https://www.w3schools.com/howto/img_avatar.png';
  public usuario = {} as Usuario;


  constructor(usuarioService: UsuarioService) { }

  ngOnInit(): void {
  }

  logout() {
    localStorage.clear();
    window.location.reload();
  }
  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        // Aqui você pode fazer algo com a imagem carregada
        console.log(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  }
}
