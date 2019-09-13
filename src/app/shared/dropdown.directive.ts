import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown]',
  exportAs: 'appDropdown'
})

export class DropdownDirective {
  public toggle = false;

  @HostListener('click') onClick(eventData: Event) {
    this.toggle = !this.toggle;
  }
}
