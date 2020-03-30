import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Praktikum03Component } from './pages/praktikum03/praktikum03.component';
import { Praktikum04Component } from './pages/praktikum04/praktikum04.component';
import { Praktikum05Component } from "./pages/praktikum05/Praktikum05Component";



const routes: Routes = [
  {
    path:'Praktikum03',
    component:Praktikum03Component
  },

  {
    path:'Praktikum04',
    component:Praktikum04Component
  },

{
  path:'Praktikum05',
  component:Praktikum05Component
}

 

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
