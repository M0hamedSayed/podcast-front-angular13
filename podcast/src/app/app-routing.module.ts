import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';

export const routes: Routes = [
  { path: 'register', redirectTo: "/signup", pathMatch: "full" },
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "", loadChildren: () => import("./pages/home-page/home-page.module").then(m => m.HomePageModule), data: { animation: 'isLeft' } },
  { path: "register", loadChildren: () => import("./pages/register/register.module").then(m => m.RegisterModule), data: { animation: 'isRight' } },
  { path: 'register', redirectTo: "/signup", pathMatch: "full" },
  { path: "password", loadChildren: () => import('./pages/forget-password/forget-password.module').then(m => m.ForgetPasswordModule), data: { animation: 'isRight' } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
