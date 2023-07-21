import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appNotification]'
})
export class NotificationDirective {

  constructor(private element:ElementRef, private renderer:Renderer2) {
    
   }
  @HostListener('click') onmouseclick(){
    this.renderer.setStyle(this.element.nativeElement,'background-color','transparent')
   }

}
