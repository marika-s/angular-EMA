import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appManager]'
})
export class ManagerDirective {
  @Input('appManager') highlightColor: string = '';
  constructor(
    private el: ElementRef,
    private renderer: Renderer2) {}

  @HostListener('mouseenter') onMouseEnter(): void {
    this.highlight(this.highlightColor || 'red');
  }

  @HostListener('mouseleave') onMouseLeave(): void {
    this.highlight('black');
  }

  private highlight(color: string): void {
    if (this.el.nativeElement.innerHTML.toLocaleLowerCase() === 'manager') {
      this.renderer.setStyle(this.el.nativeElement, 'background-color', color);
    }
  }
}