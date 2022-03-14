import { NgParticlesModule } from "ng-particles";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParticlesJSComponent } from './particles-js/particles-js.component';
import { HeroComponent } from './hero/hero.component';
import { NavComponent } from './nav/nav.component';
import { RegisterComponent } from './register/register.component';
import { RouterModule } from '@angular/router';
import { MousemoveAnimationDirective } from "src/app/core/directives/mousemove-animation.directive";
import { ElementAnimationDirective } from './../../core/directives/element-animation.directive';
import { TextAnimationDirective } from "src/app/core/directives/text-animation.directive";


@NgModule({
  declarations: [
    ParticlesJSComponent,
    HeroComponent,
    NavComponent,
    RegisterComponent,
    MousemoveAnimationDirective,
    ElementAnimationDirective,
    TextAnimationDirective
  ],
  imports: [
    CommonModule,
    NgParticlesModule,
    RouterModule

  ],
  exports: [
    ParticlesJSComponent,
    NgParticlesModule,
    HeroComponent,
    NavComponent,

  ]
})
export class HomeModule { }
