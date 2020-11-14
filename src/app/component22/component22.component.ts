import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-component22',
  template: `
    <p>
      {{ message }}
    </p>
  `,
  styles: [
  ]
})
export class Component22Component implements OnInit, OnChanges {

  @Input() message: string;

  constructor() { }

  ngOnInit(): void {
    console.log('component22 in init');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('component22 on changes')
  }

}
