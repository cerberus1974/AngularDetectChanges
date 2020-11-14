import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { scan, tap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  template: `
    <!--The content below is only a placeholder and can be replaced.-->
    <app-component1 [message]="hoge"></app-component1>
    <app-component2 [message]="foo"></app-component2>
    <app-component3 [message]="bar$ | async"></app-component3>
    <button (click)="onClick()">click!</button>
  `,
  styles: []
})
export class AppComponent implements OnInit {

  title = 'angular-detectchanges';

  hoge = 'hoge';

  _foo = 'foo';

  get foo() {
    console.log('foo');
    return this._foo;
  }

  _bar$ = new BehaviorSubject<string>('bar');

  bar$ = this._bar$.pipe(
    tap(() => console.log('bar')),
    scan((a, b) => a + b),
  );

  ngOnInit(): void {

  }

  onClick() {
    this.hoge += 'hoge';
    this._foo += 'foo';
    this._bar$.next('bar');
  }
}
