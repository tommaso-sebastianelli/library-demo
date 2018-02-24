//animations for the application

import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

export const Animations = [
    trigger('sticktorightbottomcorner', [
        state('active', style({
            position: 'fixed',
            bottom: '10vh',
            right: '10vw'
        })),
        transition('* => active', [animate('225ms ease-out',
            style({
                transform: 'scale(0.7)',
                bottom: '10vh',
                right: '10vw'
            })
        )])
    ]),
];
