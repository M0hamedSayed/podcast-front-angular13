import { Directive, Input, ElementRef, AfterViewInit } from '@angular/core';
import gsap from 'gsap';
import { Expo } from 'gsap';
@Directive({
  selector: '[appTextAnimation]'
})
export class TextAnimationDirective implements AfterViewInit {
  @Input('appTextAnimation') attrCSS!: string;
  constructor(public el: ElementRef) { }
  ngAfterViewInit(): void {
    this.animationText()


  }
  animationText() {
    let chars: Element = this.el.nativeElement;
    let content = chars.textContent?.toLowerCase();
    document.styleSheets[0].insertRule(
      `.${content}::before {
        content:'${chars.textContent}';
        position: absolute;
        left: 0;
        top: 0;
        transform: translateY(-110%);
        color: transparent;
        background-clip: text;
        --webkit--background-clip: text;
        -webkit-text-stroke: 5px ${this.attrCSS};
      }`, 0)
    let timeLine = gsap.timeline();
    timeLine.to(chars, {
      duration: 3,
      yPercent: 0,
      stagger: 0.05,
      ease: Expo.easeInOut
    }).to(chars, {
      duration: 3,
      yPercent: 110,
      ease: Expo.easeInOut,
      repeat: -1,
      yoyo: true,
      stagger: 0.1
    })

  }
}
