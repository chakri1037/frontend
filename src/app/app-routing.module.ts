import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoComponentComponent } from './demo-component/demo-component.component';
import { Demo1ComponentComponent } from './demo1-component/demo1-component.component';
const routes: Routes = [
  {
    path:'demo',component:DemoComponentComponent
  },
  {
    path:'demo1',component:Demo1ComponentComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
