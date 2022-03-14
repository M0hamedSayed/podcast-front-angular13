import { Directive, ElementRef, Input, AfterViewInit } from '@angular/core';
import gsap from 'gsap';

@Directive({
  selector: '[appElementAnimation]'
})
export class ElementAnimationDirective implements AfterViewInit {
  @Input('appElementAnimation') height!: number | '';

  constructor(private el: ElementRef) { }
  ngAfterViewInit(): void {
    if (!this.height) this.height = 40;
    gsap.fromTo(this.el.nativeElement, { duration: 1, opacity: 0.5, y: this.height, ease: Back.easeInOut }, { duration: 1, opacity: 1, y: -this.height, ease: Back.easeInOut })
  }
}
