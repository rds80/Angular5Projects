import { Directive, Input, Component, ElementRef, Renderer, OnInit } from '@angular/core';

@Directive({
  selector: '[sizer]'
})
export class SizerDirective {
  @Input() sizer: string;
  constructor(private element: ElementRef, private renderer: Renderer) { }
  ngOnInit() {
    this.renderer.setElementStyle(this.element.nativeElement, 'font-size', this.sizer);
  }
}
