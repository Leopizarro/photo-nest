import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {

  @Input() label: string;
  @Input() buttonClass: string;
  @Input() isDisabled: boolean;
  @Input() icon: string;
  @Input() buttonTextClass: string;
  @Input() isLandingButton: boolean;
  @Output() clickEvent: EventEmitter<boolean>;

  constructor() {
    this.isDisabled = false;
    this.icon = '';
    this.buttonClass = '';
    this.label = '';
    this.clickEvent = new EventEmitter();
  }

  public emitClickEvent() {
    this.clickEvent.emit(true);
  }
}
