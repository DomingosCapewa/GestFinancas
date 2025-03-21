import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-esqueceu-senha',
  templateUrl: './esqueceu-senha.component.html',
  styleUrls: ['./esqueceu-senha.component.scss']
})
export class EsqueceuSenhaComponent implements OnInit {
  formEsqueceuSenha!: FormGroup;


  constructor() { }

  ngOnInit(): void {
  }
  get email() {
    return this.formEsqueceuSenha.get('email')!;
  }

  get senha() {
    return this.formEsqueceuSenha.get('senha')!;
  }

  submit() {
    if (this.formEsqueceuSenha.invalid) {
      console.log('Formulário inválido');
      return;
    }
    console.log('Formulário válido', this.formEsqueceuSenha.value);
  }

  redefinirSenha() {
    this.email.value;
  }
}
