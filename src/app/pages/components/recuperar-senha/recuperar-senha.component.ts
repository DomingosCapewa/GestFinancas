import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { UsuarioService } from 'src/app/services/auth/usuario.service';

@Component({
  selector: 'app-recuperar-senha',
  templateUrl: './recuperar-senha.component.html',
  styleUrls: ['./recuperar-senha.component.scss']
})
export class RecuperarSenhaComponent implements OnInit {
  token!: string;
  form!: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private usuarioService: UsuarioService
  ) {}

  ngOnInit(): void {
    this.form = new FormGroup(
      {
        password: new FormControl('', [Validators.required, Validators.minLength(6)]),
        passwordConfirm: new FormControl('', Validators.required),
      },
      { validators: this.matchPasswords.bind(this) }
    );

    this.route.queryParams.subscribe(params => {
      this.token = params['token'];
      if (!this.token) {
        alert('Token inválido.');
        this.router.navigate(['/login']);
      }
    });
  }

  matchPasswords(control: AbstractControl) {
    const password = control.get('password')?.value;
    const confirm = control.get('passwordConfirm')?.value;
    return password === confirm ? null : { match: true };
  }

  submit() {
    if (this.form.invalid) {
      return;
    }

    const novaSenha = this.form.value.password;
    const confirmSenha = this.form.value.passwordConfirm;

    this.usuarioService.confirmarResetSenha({
      password: novaSenha,
      passwordConfirm: confirmSenha
    }).subscribe(
      () => {
        alert('Senha redefinida com sucesso!');
        this.router.navigate(['/login']);
      },
      (err: any) => {
        console.error(err);
        alert(err.error?.message || 'Erro ao redefinir a senha.');
      }
    );
  }
}
