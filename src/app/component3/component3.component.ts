import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-component3',
  template: `
    <p>
      {{ message }}
    </p>
  `,
  styles: [
  ]
})
export class Component3Component implements OnInit, OnChanges {

  @Input() message: string;

  constructor() { }

  ngOnInit(): void {
    console.log('component3 in init');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('component3 on changes')
  }

}
