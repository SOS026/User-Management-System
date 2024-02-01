import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';
 
@Directive({
  selector: '[appHover]'
})
export class HoverDirective {
 
  constructor(private element: ElementRef, private renderer: Renderer2) { }
 
  @HostListener('mouseenter') mouseenter(){
    this.renderer.setStyle(this.element.nativeElement, 'background-color', 'pink')
  }
 
  @HostListener('mouseleave') mouseleave(){
    this.renderer.setStyle(this.element.nativeElement, 'background-color', 'lightblue')
  }
}