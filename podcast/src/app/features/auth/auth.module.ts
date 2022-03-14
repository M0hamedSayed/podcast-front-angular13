import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpeakerFormComponent } from './speaker-form/speaker-form.component';
import { StudentFormComponent } from './student-form/student-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginFormComponent } from './login-form/login-form.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    SpeakerFormComponent,
    StudentFormComponent,
    LoginFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [
    SpeakerFormComponent,
    StudentFormComponent,
    LoginFormComponent
  ]
})
export class AuthModule { }
