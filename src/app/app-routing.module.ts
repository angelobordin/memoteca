import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewPensamentoComponent } from './components/pensamentos/new-pensamento/new-pensamento.component';
import { ListPensamentoComponent } from './components/pensamentos/list-pensamento/list-pensamento.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'pensamento/listar',
    pathMatch: 'full',
  },
  {
    path: 'pensamento/novo',
    component: NewPensamentoComponent
  },
  {
    path: 'pensamento/listar',
    component: ListPensamentoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
