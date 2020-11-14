import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-component1',
  template: `
    <p>
      {{message}}
    </p>
  `,
  styles: [
  ]
})
export class Component1Component implements OnInit, OnChanges {

  @Input() message: string;

  constructor() { }

  ngOnInit(): void {
    console.log('component1 in init');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('component1 on changes')
  }

}
