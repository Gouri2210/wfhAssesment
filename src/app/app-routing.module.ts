import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { APIDataComponent } from './comp/apidata/apidata.component';
import { ParentComponent } from './comp/parent/parent.component';
import { ChildComponent } from './comp/child/child.component';

const routes: Routes = [
  
  {component : ParentComponent, path : 'parent'},
  { component : ChildComponent, path:'child'},
  { component : APIDataComponent, path: 'api'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
