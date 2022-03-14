import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register.component';
import { Routes, RouterModule } from '@angular/router';
import { SpeakerFormComponent } from 'src/app/features/auth/speaker-form/speaker-form.component';
import { AuthModule } from 'src/app/features/auth/auth.module';
import { StudentFormComponent } from 'src/app/features/auth/student-form/student-form.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  {
    path: "", component: RegisterComponent, children: [
      { path: "speaker", component: SpeakerFormComponent },
      { path: "student", component: StudentFormComponent }
    ]
  }
];


@NgModule({
  declarations: [
    RegisterComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    AuthModule,
    FormsModule,
    HttpClientModule
  ]
})
export class RegisterModule { }
