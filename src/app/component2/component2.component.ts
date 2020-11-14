import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { scan, tap } from 'rxjs/operators';

@Component({
  selector: 'app-component2',
  template: `
    <p>
      {{ message }}
    </p>
    <app-component20 [message]="usualMessage"></app-component20>
    <app-component21 [message]="lazyMessage"></app-component21>
    <app-component22 [message]="bar$ | async"></app-component22>
  `,
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Component2Component implements OnInit, OnChanges {

  @Input() message: string;

  get usualMessage() {
    console.log('usualMessage');
    return this.message + '-usual';
  }

  _lazyMessage: string;

  get lazyMessage() {
    console.log('--------------------------------------');
    console.log('lazyMessage');
    return this._lazyMessage;
  }

  _bar$ = new BehaviorSubject<string>('');

  bar$ = this._bar$.pipe(
    tap(() => console.log('compornent2 bar')),
  );


  constructor() { }

  ngOnInit(): void {
    console.log('component2 in init');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('component2 on changes');

    setTimeout(() => {
      console.log('************** setTimeout **************');
      this._lazyMessage = changes.message.currentValue + '-lazy';
    }, 5000);

    this._bar$.next(changes.message.currentValue + '-observable');
  }
}
