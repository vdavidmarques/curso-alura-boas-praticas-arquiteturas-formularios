import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch:'full',//Identifica os espaços em branco e os retira do endereço, previndo caso o usuário add espaços em branco à url; pathMathc faz este tratamentp
    redirectTo: 'home',//esse configuração estabelece que, assim que ele acessar ele irá para a home
  },
  {
    path: 'home',
    loadChildren: ()=> import ('./home/home.module').then((m) => m.HomeModule),//import - assim que ele carregar esse módulo
  },
  {
    path: 'animais',
    loadChildren: () =>
    import ('./animais/animais.module').then((m) => m.AnimaisModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
