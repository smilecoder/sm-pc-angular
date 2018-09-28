import { Input, Directive, OnInit, ElementRef } from '@angular/core'
import { DomSanitizer, SafeStyle } from '@angular/platform-browser'
import { isParentAttr } from '../shared/utils'

@Directive({
  selector: '[sm-col]',
  host: {
    '[style]': 'gutterStyle()',
    '[class]': 'classList() + sizeClassList()',
  },
})
export class SmColDirective implements OnInit {
  
  @Input() span: number = 24
  @Input() offset: number = 0
  @Input() push: number = 0
  @Input() pull: number = 0
  @Input() xs: any
  @Input() sm: any
  @Input() md: any
  @Input() lg: any
  @Input() xl: any
  
  parentIsRow: any = null
  gutterFromParent: number = 0
  nativeClass: string = ' '
  
  constructor(
    private sanitizer: DomSanitizer,
    private el: ElementRef,
  ) {
    this.nativeClass += this.el.nativeElement.classList.value
  }
  
  classList(): string {
    const makeClass = (key: string): string => key !== 'span'
      ? ` sm-col-${key}-${this[key]}`
      : ` sm-col-${this[key]}`
    const classStr = ['span', 'offset', 'pull', 'push'].reduce((pre, next) => !this[next]
      ? pre
      : pre + makeClass(next), 'sm-col')
    return classStr + this.nativeClass
  }
  
  sizeClassList(): string {
    const makeClass = (key: string): string => {
      const props = this[key] || {}
      return Object.keys(props).map(prop => prop !== 'span'
        ? `sm-col-${key}-${prop}-${props[prop]}`
        : `sm-col-${key}-${props[prop]}`).join(' ')
    }
    const classStr: string = ['xs', 'sm', 'md', 'lg', 'xl'].reduce((pre, next) => !this[next] ?
      pre : typeof this[next] === 'object'
        ? `${pre} ${makeClass(next)}`
        : `${pre} sm-col-${next}-${this[next]}`, '')
  
    return classStr
  }
 
  gutterStyle(): SafeStyle {
    let styleStr = ''
    if (this.gutterFromParent) {
      styleStr += `padding-left: ${this.gutterFromParent / 2}px;`
      styleStr += `padding-right: ${this.gutterFromParent / 2}px;`
    }
    return this.sanitizer.bypassSecurityTrustStyle(styleStr)
  }
  
  ngOnInit(): void {
    const nativeElement = this.el.nativeElement
    this.parentIsRow = isParentAttr(nativeElement, 'sm-row')
    if (this.parentIsRow) {
      this.gutterFromParent = this.parentIsRow.getAttribute('gutter') || 0
    }
  }
  
}
