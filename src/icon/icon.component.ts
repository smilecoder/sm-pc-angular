import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'sm-icon',
  templateUrl: './icon.component.html'
})
export class SmIconComponent implements OnInit {

  @Input() name = '';

  constructor() { }

  ngOnInit() {
  }

}
