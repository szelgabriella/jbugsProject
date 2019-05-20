import { Directive, Input, ElementRef } from '@angular/core';

@Directive({
  selector: '[appDirnow]'
})
export class DirnowDirective {
  @Input() roles: String[];


  constructor(private el: ElementRef) { }

  ngAfterViewInit(){
    //implement component disable
    if (!this.roles.includes("close_bug") )
    this.el.nativeElement.disabled = 'true';
  }

}
