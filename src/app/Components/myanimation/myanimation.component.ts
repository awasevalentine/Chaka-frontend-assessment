import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { from, Subscription } from 'rxjs';
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';
import { FadeInGlow, isGreen, letStagger, QueryShake, starAnimation } from '../../Core/Models/myanimation';
import { WebSocketDataService } from '../../Core/Services/web-socket-data.service';
import { map, catchError, tap } from 'rxjs/operators';

@Component({
  selector: 'app-myanimation',
  templateUrl: './myanimation.component.html',
  styleUrls: ['./myanimation.component.scss'],
  animations: [starAnimation, QueryShake, FadeInGlow, isGreen, letStagger]
})
export class MyanimationComponent implements OnInit, OnDestroy {
  items = [];

  // liveData$ = this.dataService.messages$.subscribe(data=> console.log(data));

  show: boolean;
  isGreen: boolean;

  messageFromServer =[];
  wsSubscription: Subscription;
   status;

  constructor(private dataService: WebSocketDataService) {
    this.items = ['hey i am Valentine', 'You are Bassey', "whats your name",'hey i am Valentine', 'You are Bassey'];

   }

  ngOnInit(): void {
    //this.liveData$;
    this.wsSubscription =
      this.dataService.createObservableSocket()
       .subscribe(
        data => this.messageFromServer = JSON.parse(data),
         err => console.log( err),
        () =>  console.log( 'The observable stream is complete')
      );
  }

  pushItem() {
    this.items.push('this is another item');
  }

  removeItem(){
    this.items.pop();
  }

  green() {
    this.isGreen =! this.isGreen;
  }

  toogleShow() {
    this.show =! this.show;
  }


  sendMessageToServer(){
    this.status = this.dataService.sendMessage("Hello from client");
   }

  closeSocket(){
    this.wsSubscription.unsubscribe();
     this.status = 'The socket is closed';
  }

  ngOnDestroy() {
    this.closeSocket();
  }

}
