import { Component, ChangeDetectionStrategy, Input } from '@angular/core'

@Component({
  selector: 'sm-button-group',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div [class]="'sm-btn-group ' + nativeClass">
      <ng-content></ng-content>
    </div>
  `,
})
export class SmButtonGroup {
  
  @Input('class') nativeClass: string = ''
  
  constructor() {
  }
  
}
