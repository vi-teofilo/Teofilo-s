import { HomeComponent } from './views/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CepComponent} from 'src/app/views/cep/cep.component'
import { CepsearchComponent } from './views/cep/cepsearch/cepsearch.component';


const routes: Routes = [{
  path: "",component: HomeComponent
},
{
  path: "home",component: HomeComponent
},
{
  path: "home",component: HomeComponent
},
{
  path: "cep",component: CepComponent
},
{
  path: "cep/cepsearch",component: CepsearchComponent
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
