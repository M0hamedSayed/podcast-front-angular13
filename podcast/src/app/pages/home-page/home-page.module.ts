import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page.component';
import { HomeModule } from 'src/app/features/home/home.module';
import { RouterModule, Routes } from '@angular/router';
import { HeroComponent } from 'src/app/features/home/hero/hero.component';
import { RegisterComponent } from 'src/app/features/home/register/register.component';
import { LoginComponent } from '../login/login.component';


const routes: Routes = [
  {
    path: "", component: HomePageComponent, children: [
      { path: "home", component: HeroComponent },
      { path: "signup", component: RegisterComponent },
      { path: "login", component: LoginComponent }
    ]
  }
]


@NgModule({
  declarations: [
    HomePageComponent,
  ],
  imports: [
    CommonModule,
    HomeModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    HomePageComponent,
  ]
})
export class HomePageModule { }
