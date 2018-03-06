//animations for the application

import { trigger, state, style, transition, animate, keyframes, query, stagger } from '@angular/animations';

export const Animations = [
    trigger('slamtocorner', [
        state('active', style({
            position: 'fixed',
            bottom: '10vh',
            right: '10vw',
            transform: 'scale(1)'
        })),
        transition('* => active', [animate('225ms {{delay}}ms ease-out', keyframes([
            style({ transform: 'scale(0.5)', bottom: '*', right: '*', offset: 0 }),
            style({ transform: 'scale(0.5) translateY(25vh) translateX(2vw)', bottom: '*', right: '*', offset: 0.3 }),
            style({ transform: 'scale(0.5) translateY(50vh) translateX(5vw)', bottom: '*', right: '*', offset: 0.7 }),
            style({ transform: 'scale(1)  translateY(0) translateX(0)', bottom: '10vh', right: '10vw', offset: 1 })
        ])
        ),], { params: { delay: 0 } }),
        transition('active => *', [animate('125ms {{delay}}ms ease-out', keyframes([
            style({ transform: 'scale(0.5)', bottom: '10vh', right: '10vw', offset: 0 }),
            style({ transform: 'scale(0.5) translateY(50vh) translateX(5vw)', bottom: '*', right: '*', offset: 0.3 }),
            style({ transform: 'scale(0.5) translateY(25vh) translateX(2vw)', bottom: '*', right: '*', offset: 0.7 }),
            style({ transform: 'scale(1)  translateY(0) translateX(0)', bottom: 'initial', right: 'initial', offset: 1 })
        ])
        ),], { params: { delay: 0 } })
    ]),
    trigger('appear', [
        state('void', style({
            position: 'relative',
            top: '300px',
            opacity: 0
        })),
        transition('void => *', [animate('225ms {{delay}}ms ease-out', keyframes([
            style({ position: 'relative', top: '0px', opacity: 1.0 })
        ]),
        )], { params: { delay: 0 } }),
        transition('* => void', [animate('50ms ease-in', keyframes([
            style({ position: 'relative', top: '100px', opacity: 0 })
        ]),
        )])
    ]),
    trigger('popout', [
        state('void', style({
            transform: 'scale(0.7)'
        })),
        transition('void => *', [animate('100ms {{delay}}ms ease-out', keyframes([
            style({ transform: 'scale(1.0)' })
        ])
        )], { params: { delay: 0 } })
    ])
];
