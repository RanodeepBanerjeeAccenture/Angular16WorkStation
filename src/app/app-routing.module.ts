import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Component1Component } from './component1/component1.component';
import { Component2Component } from './component2/component2.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [
  // {
    // path:'',redirectTo:'component1', pathMatch:'full'                default ( for example login page)
  // },
  {
    path:'component1',component:Component1Component
  },
  {
    path:'component2',component:Component2Component
  },
  // wildcard route
  {
    path:'**',component:PagenotfoundComponent                  
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
