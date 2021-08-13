import { trigger, transition, style, query, animateChild, animate, group } from '@angular/animations';
export const routeTransitionAnimations = trigger('triggerName', [
  transition('About => Home', [
    style({ position: 'relative' }),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%'
      })
    ]),
    query(':enter', [style({ left: '-100%', opacity: 0 })]),
    query(':leave', animateChild()),
    group([
      query(':leave', [animate('1.3s 10ms cubic-bezier(.42,.11,.31,1.26)', style({ left: '100%', opacity: 0 }))]),
      query(':enter', [animate('1.3s 10ms cubic-bezier(.42,.11,.31,1.26)', style({ left: '0%', opacity: 1 }))])
    ]),
    query(':enter', animateChild())
  ]),
  transition('Home => About', [
    style({ position: 'relative' }),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        right: 0,
        width: '100%'

      })
    ]),
    query(':enter', [style({ right: '-100%', opacity: 0 })]),
    query(':leave', animateChild()),
    group([
      query(':leave', [animate('1.3s 10ms cubic-bezier(.42,.11,.31,1.26)', style({ right: '100%', opacity: 0 }))]),
      query(':enter', [animate('1.3s 10ms cubic-bezier(.42,.11,.31,1.26)', style({ right: '0%', opacity: 1 }))])
    ]),
    query(':enter', animateChild())
  ]),
]);