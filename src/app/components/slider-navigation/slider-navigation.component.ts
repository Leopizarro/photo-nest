import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-slider-navigation',
  templateUrl: './slider-navigation.component.html',
  styleUrls: ['./slider-navigation.component.scss'],
})
export class SliderNavigationComponent {
  @Output() private direction: EventEmitter<any>;

  constructor() {
    this.direction = new EventEmitter<'previous' | 'next'>();
  }

  public clickButton(direction: 'previous' | 'next') {
    this.direction.emit(direction);
  }
}
