import { Cliente } from './cliente';
import { Entidade } from './entidade';
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

export class EnderecoEnt {
  id: number  = 0;
  logradouro: string = '';
  numero: number = 0;
  complemento: string = '';
  bairro: string = '';
  cep: string = '';
  cidade: string = '';
  uf: string = '';
  entidade: Entidade;
}


export class EndCliEnt {
  id: number  = 0;
  logradouro: string = '';
  numero: number = 0;
  complemento: string = '';
  bairro: string = '';
  cep: string = '';
  cidade: string = '';
  uf: string = '';
  cliente: Cliente;
  entidade: Entidade;
}

