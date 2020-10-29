import {HostListener, Output} from '@angular/core';
import {Directive} from '@angular/core';
import {EventEmitter} from 'events';

@Directive({
  selector: '[lib-button]'
})

export class ButtonDirective {

  @Output() myClick: EventEmitter = new EventEmitter();

  @HostListener('click', ['$event'])

  onClick(e) {
    e.target.style.color = 'white';
    e.target.style.backgroundColor = 'red';
  }
}
