import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-component20',
  template: `
    <p>
      {{ message }}
    </p>
  `,
  styles: [
  ]
})
export class Component20Component implements OnInit, OnChanges {

  @Input() message: string;

  constructor() { }

  ngOnInit(): void {
    console.log('component20 in init');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('component20 on changes')
  }
}
