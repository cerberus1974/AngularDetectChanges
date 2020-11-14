import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-component21',
  template: `
    <p>
      {{ message }}
    </p>
  `,
  styles: [
  ]
})
export class Component21Component implements OnInit {

  @Input() message: string;

  constructor() { }

  ngOnInit(): void {
    console.log('component21 in init');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('component21 on changes')
  }
}
