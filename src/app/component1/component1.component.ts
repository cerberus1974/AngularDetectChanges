import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component1',
  template: `
    <p>
      component1 works!
    </p>
  `,
  styles: [
  ]
})
export class Component1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
