import { trigger, transition, style, animate } from '@angular/animations'

export let fade =
    trigger('fade', [
      transition('void => *',[
        style({background: '#444', opacity: 0}),
        animate(2000)
      ])
    ])

