import { Component, OnInit, Input, Output, EventEmitter, ElementRef } from '@angular/core';
import { SafeStyle, DomSanitizer } from '@angular/platform-browser'

import { removeNgTag } from '../shared/utils'

@Component({
  selector: 'sm-button',
  templateUrl: './button.component.html'
})

export class SmButton implements OnInit {

  @Input() disabled: boolean = false;
  @Input() plain: boolean = false;
  @Input() size: string;
  @Input() type: string;
  @Input() round: boolean = false;
  @Input() circle: boolean = false;
  @Input() loading: boolean = false;
  @Input() block: boolean = false;
  @Input() icon: string = '';
  @Input('native-type') nativeType: string = 'button';
  @Input() style: string = '';
  @Input('class') nativeClass: string = '';


  @Output() click: EventEmitter<any> = new EventEmitter<any>();

  constructor(
    private el: ElementRef,
    private sanitizer: DomSanitizer,
  ) {
  }
  
  clickHandle($event: Event): void {
    this.click.emit($event)
  }
  
  extendStyles(): SafeStyle {
    return this.sanitizer.bypassSecurityTrustStyle(this.style)
  }
  
  ngOnInit(): void {
    removeNgTag(this.el.nativeElement)
  }

}
