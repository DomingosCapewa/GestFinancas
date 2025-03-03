export class Usuario {
  Id!: number;
  Nome: string | undefined;
  Sobrenome: string = '';
  Email!: string;
  Password!: string;
  Ativo!: boolean;
  DataAtualizacao!: Date;
  DataCriacao!: Date;
  Telefone!: string;
  DataNascimento!: Date;
  Cpf!: string;
  ImagemPerfil!: string;
  Token!: string;
}
/**
 *
 */
