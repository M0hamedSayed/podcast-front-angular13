import { query, style, transition, trigger, animate, group } from "@angular/animations";

// export class RouteAnimation {

export const scale = trigger('myAnimation', [
    transition('* <=> *', [
        query(':enter, :leave', [
            style({
                position: 'absolute',
                left: 0,
                width: '100%',
                opacity: 0,
                transform: 'scale(0) translateY(0%)'
            })
        ], { optional: true }),
        query(':enter', [
            animate('400ms ease', style({
                opacity: 1, transform: 'scale(1) translateY(0)'
            })),
        ], { optional: true })
    ])
]);

export const opacity2 = trigger('myAnimation', [
    transition('* <=> *', [
        query(
            ':enter',
            [style({ opacity: 0 })],
            { optional: true }
        ),
        query(
            ':leave',
            [style({ opacity: 1 }), animate('0.3s', style({ opacity: 0 }))],
            { optional: true }
        ),
        query(
            ':enter',
            [style({ opacity: 0 }), animate('0.3s', style({ opacity: 1 }))],
            { optional: true }
        )
    ])
])

export const opacity = trigger('myAnimation', [
    transition('* => isLeft', slideTo('left')),
    transition('* => isRight', slideTo('right')),
    transition('isRight => *', slideTo('left')),
    transition('isLeft => *', slideTo('right'))
])


function slideTo(direction: string) {
    const optional = { optional: true };
    return [
        query(
            ':leave , :enter',
            [style({
                position: 'absolute',
                top: 0,
                // opacity: 0,
                [direction]: 0,
                width: '100%'
            })],
            optional
        ),
        query(':enter',
            [style({ [direction]: '-100%' })],
            optional
        ),
        group([
            query(':leave', [
                animate('600ms ease', style({ [direction]: '100%', opacity: 0 }))
            ], optional),
            query(':enter', [
                animate('600ms ease', style({ [direction]: '0%', opacity: 1 }))
            ], optional)
        ]),
    ]
}


// }
