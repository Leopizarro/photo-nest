import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-info-box',
  templateUrl: './info-box.component.html',
  styleUrls: ['./info-box.component.scss'],
})
export class InfoBoxComponent {

  @Input() title: string;
  @Input() subtitle: string;
  @Input() description: string;
  @Input() date: any;
  @Input() isSpraypaintInfoBox: boolean;

  constructor() {
    this.title= '';
    this.subtitle= '';
    this.description= '';
    this.date= '';
    this.isSpraypaintInfoBox = true;
  }
}
