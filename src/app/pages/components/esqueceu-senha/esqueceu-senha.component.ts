import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

import { EnviarEmailService } from './../../../services/enviarEmail.service';

@Component({
  selector: 'app-esqueceu-senha',
  templateUrl: './esqueceu-senha.component.html',
  styleUrls: ['./esqueceu-senha.component.scss'],
})
export class EsqueceuSenhaComponent implements OnInit {
  formEsqueceuSenha!: FormGroup;
  constructor(
    private router: Router,
    private enviarEmailService: EnviarEmailService,
    private fb: FormBuilder
  ) {}
  ngOnInit(): void {
    this.formEsqueceuSenha = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }
  // ngOnInit(): void {}
  get email() {
    return this.formEsqueceuSenha.get('email')?.value;
  }

  // get senha() {
  //   return this.formEsqueceuSenha.get('senha')!;
  // }

  submit() {
    if (this.formEsqueceuSenha.invalid) {
      console.log('Formulário inválido');
      return;
    }
    console.log('Formulário válido', this.formEsqueceuSenha.value);
  }
  // esqueceuSenha() {
  //   if (this.email) {
  //     this.router.navigate(['/resetar-senha'], {
  //       queryParams: { email: this.email },
  //     });
  //   }
  // }
  enviarEmail() {
    this.enviarEmailService.enviarEmail(this.email).subscribe(
      (response) => {
        console.log('E-mail enviado com sucesso:', response);
      },
      (error) => {
        console.error('Erro ao enviar e-mail:', error);
      }
    );
  }
  voltar() {
    this.router.navigate(['/login']);
  }
}
