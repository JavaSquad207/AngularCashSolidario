import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./telaprincipal/menu/menu.module').then((m) => m.MenuModule),
  },
  {
    path: 'telacliente',
    loadChildren: () =>
      import('./telaprincipal/cliente/cliente.module').then(
        (m) => m.ClienteModule
      ),
  },
  {
    path: 'telaentidade',
    loadChildren: () =>
      import('./telaprincipal/entidade/entidade.module').then(
        (m) => m.EntidadeModule
      ),
  },
  {
    path: 'telaendereco',
    loadChildren: () =>
      import('./telaprincipal/endereco/endereco.module').then(
        (m) => m.EnderecoModule
      ),
  },
  {
    path: 'menucliente',
    loadChildren: () =>
      import('./cliente/cliente.module').then((m) => m.ClienteModule),
  },
  {
    path: 'novocliente',
    loadChildren: () =>
      import('./cliente/clienteform/clienteform.module').then(
        (m) => m.ClienteformModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
