
import { trigger, style, transition, animate, keyframes, query, stagger, group, sequence, state } from '@angular/animations';
import { Optional } from '@angular/core';
import { AnimationDurations } from '@angular/material/core';

export const starAnimation = [
 trigger('listAnimation', [
  transition('* => *', [
    query(':enter', style({opacity: 0}), {optional: true}),
    query(':enter', stagger('300ms', [
      animate('1s ease-in', keyframes([
        style({opacity: 0, transform: 'translateY(-75px)', offset: 0}),
        style({opacity: .5, transform: 'translateY(35px)', offset: 0.3}),
        style({opacity: 1, transform: 'translateY(0)', offset: 1}),
      ]))
    ]), {optional: true}),

    query(':leave', stagger('300ms', [
      animate('1s ease-in', keyframes([
        style({opacity: 1, transform: 'translateY(0)', offset: 0}),
        style({opacity: .5, transform: 'translateY(35px)', offset: 0.3}),
        style({opacity: 0, transform: 'translateY(-75px)', offset: 1}),
      ]))
    ]), {optional: true}),
  ])
]),

trigger('explainerAnim', [
  transition('* => *', [
    query('.col', style({ opacity: 0, transform: 'translateX(-40px)'})),
    query('.col', stagger('500ms', [
      animate('800ms 1.2s ease-out', style({opacity: 1, transform: 'translateX(0)'}))
    ]))
  ]),
]),

trigger('fadeInOut',[
  transition(':enter', [
    style({ opacity: 0, transform: 'translateX(-300px)'}),
    animate('500ms', style({opacity: 1, transform: 'translateX(0)'})),
  ]),

  transition(':leave', [
    animate('500ms', style({ opacity: 0, transform: 'translateY(10px)'}))
  ])
])
]



const shakeAnimation =[
  style({transform: 'rotate(0)'}),
  animate('8s ease-in-out', style({ transform: 'rotate(360deg)'})),
];

export const QueryShake = [
  trigger('queryShake', [
    transition(':enter, :leave', [
      query('.card', shakeAnimation, {
        limit: 2,
      })
    ])
  ])
];

export const FadeInGlow =[
trigger('fadeInGlow', [
  transition(':enter', [
    style({ opacity: 0}),
    animate('1s', style({opacity: 1}))
  ])
])
];

export const isGreen = [
  trigger('changeColor', [
    state('true', style({backgroundColor: 'green'})),

    state('false', style({backgroundColor: 'red'})),
    transition('true => false', animate('4000ms 7000ms', keyframes([ style({'border-radius': '7px', offset: 0}),
    style({backgroundColor: 'blue', offset: 0.50}),
    style({backgroundColor: 'black', offset: 0.7}),
    style({backgroundColor: 'yellow', offset: 0.9}),
    style({backgroundColor: 'silver', offset: 1})

  ]))),
    transition('false => true', animate('1000ms'))
  ])
];

export const letStagger =[
  trigger('letStagger', [
    transition('* => *', [
    query(':enter', style({opacity: 0}), {optional: true}),
    query(':enter', [
      stagger(300, animate('1000ms', keyframes([
      style({opacity: 0, transform: 'translateY(-75px)', offset: 0}),
      style({opacity: 0.5, transform: 'translateY(100px)', offset: 0.5}),
      style({opacity: 1, transform: 'translateY(0)', offset: 1}),

      ])))
    ], {optional: true}),

    query(':leave', stagger(300, animate('1000ms', keyframes([
      style({opacity: 1, transform: 'translateY(0)', offset: 0}),
      style({opacity: 0.5, transform: 'translateY(100px)', offset: 0.5}),
      style({opacity: 0, transform: 'translateY(-75)', offset: 1}),
    ]))), {optional: true})

  ])
])
]

