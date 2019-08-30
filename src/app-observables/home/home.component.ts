import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval, Observable, Observer, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  numberSubscription: Subscription;
  constructor() { }

  ngOnInit() {
    const numbers = interval(1000)
      .pipe(
        map(
          (data: number) => data * 2
        )
      );
    this.numberSubscription = numbers.subscribe(
      (num: number) => { console.log(num); }
    );

    const obs = Observable.create((observer: Observer<any>) => {
      setTimeout(() => {
        console.log('1');
        observer.next('first packege');
      }, 2000);

      setTimeout(() => {
        console.log('2');
        observer.next('second packege');
      }, 4000);

      setTimeout(() => {
        console.log('here');
        observer.complete();
      }, 5000);

      setTimeout(() => {
        console.log('3');
        observer.error('second packege');
      }, 6000);

    });

    this.subscription = obs.subscribe(
       (data: string) => { console.log(data); },
       (error: string) => { console.log('error'); },
       () => { console.log('completed'); }
    );
  }

  ngOnDestroy() {
    this.numberSubscription.unsubscribe();
    this.subscription.unsubscribe();
  }

}
