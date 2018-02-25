//animations for the application

import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

export const Animations = [
    trigger('slamtocorner', [
        state('active', style({
            position: 'fixed',
            bottom: '10vh',
            right: '10vw'
        })),
        transition('* => active', [animate('225ms ease-out', keyframes([
            style({ transform: 'scale(1)', bottom: '*', right: '*', offset: 0 }),
            style({ transform: 'scale(0.5)', bottom: '*', right: '*', offset: 0.5 }),
            style({ transform: 'scale(1)', bottom: '10vh', right: '10vw', offset: 1.0 })
        ])
        )])
    ]),
    trigger('emerge', [
        state('void', style({
            position: 'relative',
            top: '100%',
            opacity: 0
        })),
        transition('void => *', [animate('225ms 400ms ease-out', keyframes([
            style({ position: 'relative', top: '*', opacity: 1.0 })
        ])
        )])
    ]),
    trigger('popout', [
        state('void', style({
            transform: 'scale(0.7)'
        })),
        transition('void => *', [animate('125ms 650ms ease-out', keyframes([
            style({ transform: 'scale(1.0)' })
        ])
        )])
    ]),
];
