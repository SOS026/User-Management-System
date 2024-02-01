import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';
 
@Directive({
  selector: '[appOhover]'
})
export class OhoverDirective {
 
  constructor(private element: ElementRef, private renderer: Renderer2) { }
 
  @HostListener('mouseenter') mouseenter(){
    this.renderer.setStyle(this.element.nativeElement, 'background-color', 'gray')
  }
 
  // @HostListener('mouseleave') mouseleave(){
    // this.renderer.setStyle(this.element.nativeElement, 'background-color', 'pink')
  // }
}