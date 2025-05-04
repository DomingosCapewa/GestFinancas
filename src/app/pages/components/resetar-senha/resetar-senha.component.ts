import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/auth/usuario.service';

@Component({
  selector: 'app-resetar-senha',
  templateUrl: './resetar-senha.component.html',
  styleUrls: ['./resetar-senha.component.scss'],
})
export class ResetarSenhaComponent implements OnInit {
  formResetarSenha!: FormGroup;

  constructor(
    private usuarioService: UsuarioService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.formResetarSenha = new FormGroup(
      {
        password: new FormControl('', Validators.required),
        passwordConfirm: new FormControl('', Validators.required),
      },
      { validators: this.matchPasswords }
    );

    // this.route.queryParams.subscribe((params: any) => {
    //   if (params['email']) {
    //     this.email.setValue(params['email']);
    //   } else {
    //     console.warn('Email não encontrado nos queryParams');
    //   }
    // });
  }

  matchPasswords(group: AbstractControl) {
    const password = group.get('password')?.value;
    const confirm = group.get('passwordConfirm')?.value;

    if (!password || !confirm) {
      return null;
    }

    return password === confirm ? null : { match: true };
  }

  submit() {
    console.log('Form values:', this.formResetarSenha.value);
    console.log('Form valid?', this.formResetarSenha.valid);
    console.log('Form errors:', this.formResetarSenha.errors);

    if (this.formResetarSenha.invalid) {
      console.log('Formulário inválido');
      return;
    }

    this.usuarioService.resetPassword(this.formResetarSenha.value).subscribe(
      (response: any) => {
        console.log('Senha resetada com sucesso', response);

        this.router.navigate(['/login']);
      },
      (error: any) => {
        console.error('Erro ao resetar senha', error);
      }
    );
  }

  // get email(): FormControl {
  //   return this.formResetarSenha.get('email') as FormControl;
  // }

  get password(): FormControl {
    return this.formResetarSenha.get('password') as FormControl;
  }

  get passwordConfirm(): FormControl {
    return this.formResetarSenha.get('passwordConfirm') as FormControl;
  }
}
