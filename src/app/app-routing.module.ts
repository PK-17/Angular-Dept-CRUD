import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { ListdeptComponent } from './listdept/listdept.component';
import { FindDeptComponent } from './find-dept/find-dept.component';
import { AddDeptComponent } from './add-dept/add-dept.component';
import { EditDeptComponent } from './edit-dept/edit-dept.component';
import { DeleteDeptComponent } from './delete-dept/delete-dept.component';

const routes: Routes = [
  { path:'add', component: AddDeptComponent },
  { path:'list', component: ListdeptComponent },
  { path:'edit/:id', component: EditDeptComponent },
  { path:'find/:id', component:FindDeptComponent },
  { path:'delete/:id', component:DeleteDeptComponent }
]



@NgModule({
  declarations: [],
  imports: [
    CommonModule, FormsModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule, FormsModule]
})
export class AppRoutingModule { }