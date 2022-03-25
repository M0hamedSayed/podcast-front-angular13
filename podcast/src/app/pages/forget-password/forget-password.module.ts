import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForgetPasswordComponent } from './forget-password.component';
import { Routes, RouterModule } from '@angular/router';
import { ForgetpassComponent } from './../../features/auth/forgetpass/forgetpass.component';

const routes: Routes = [
  {
    path: "", component: ForgetPasswordComponent, children: [
      { path: "forget", component: ForgetpassComponent }
    ]
  }
]

@NgModule({
  declarations: [
    ForgetPasswordComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ForgetPasswordModule { }
