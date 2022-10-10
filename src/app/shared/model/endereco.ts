import { Cliente } from './cliente';
export class Endereco {
  id: number  = 0;
  logradouro: string = '';
  numero: number = 0;
  complemento: string = '';
  bairro: string = '';
  cep: string = '';
  cidade: string = '';
  uf: string = '';
  }

export class EnderecoCli {
  id: number  = 0;
  logradouro: string = '';
  numero: number = 0;
  complemento: string = '';
  bairro: string = '';
  cep: string = '';
  cidade: string = '';
  uf: string = '';
  cliente: Cliente;
}

