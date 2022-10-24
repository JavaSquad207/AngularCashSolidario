export class Endereco {
  id: number = 0;
  logradouro: string = '';
  numero: number = 0;
  complemento: string = '';
  bairro: string = '';
  cep: string = '';
  cidade: string = '';
  uf: string = '';
  fk_idEntidade: number = 0;
  fk_idCliente: number = 0;
}
