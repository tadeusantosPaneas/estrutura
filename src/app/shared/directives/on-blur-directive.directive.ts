import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[pnsOnBlurDirective]'
})
export class OnBlurDirectiveDirective {
  @Input()
  focus:boolean;
  @Input() ele: ElementRef;
  constructor(private element: ElementRef) { 
    console.log(this.ele, this.focus);
   }

  protected ngOnChanges() {
    this.element.nativeElement.focus();
}

}


