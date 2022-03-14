import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import gsap from 'gsap';

@Directive({
  selector: '[appMousemoveAnimation]'
})
export class MousemoveAnimationDirective {
  @Input('appMousemoveAnimation') factor!: number | '';
  constructor(private el: ElementRef) { }

  @HostListener('mousemove', ['$event'])
  animateImg(e: any) {
    if (!this.factor) this.factor = 0.6;
    let imgEl: Element = this.el.nativeElement;
    let timeLine = gsap.timeline();

    let xPos = e.pageX / e.target.offsetWidth * 100 - 50;
    let yPos = e.pageY / e.target.offsetHeight * 100 - 50;

    timeLine.set(imgEl, { transformStyle: "preserve-3d" });
    timeLine.to(imgEl, {
      duration: 2,
      x: -xPos * this.factor,
      y: -yPos * this.factor,
      transformPerspective: 500,
      ease: Expo.easeOut
    });
  }
}
