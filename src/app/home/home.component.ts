 import { Component, OnInit, OnDestroy } from '@angular/core';
 import { Observable } from 'rxjs/Observable';
 import { Observer } from 'rxjs/Observer';
 import 'rxjs/Rx';
 import { Subscription } from 'rxjs/Subscription';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  numberObsSubscription:Subscription;
  customObsSubscription:Subscription;

  constructor() { }

  ngOnInit() {
    const myNumObserver = Observable.interval(1000)
   this.numberObsSubscription =  myNumObserver.subscribe((number:number) => {
      console.log(number);

    })

    const myObservable = Observable.create((observer:Observer<string>) => {
      setTimeout(() => {
        observer.next('First Packages')
      },2000),
      setTimeout(() => {
        observer.next('Second Packages');
      },4000),
      setTimeout( () => {
       //observer.error('This does not Work');
       observer.next('This is Complete')
      },5000),

      setTimeout( () => {
        //observer.error('This does not Work');
        observer.next('Third Packages')
       },6000)
    })

    this.customObsSubscription = myObservable.subscribe((data:string) => {
      console.log(data)
    },
    (data:string) => {
     console.log(data);
    },
    (error:string) => {
   console.log(error)
    }
    )
  }

  ngOnDestroy() {
    this.numberObsSubscription.unsubscribe();
    this.customObsSubscription.unsubscribe();
  }
}
