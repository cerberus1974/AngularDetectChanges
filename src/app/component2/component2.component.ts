import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-component2',
  template: `
    <p>
      {{ message }}
    </p>
  `,
  styles: [
  ]
})
export class Component2Component implements OnInit, OnChanges {

  @Input() message: string;

  constructor() { }

  ngOnInit(): void {
    console.log('component2 in init');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('component2 on changes')
  }

}
