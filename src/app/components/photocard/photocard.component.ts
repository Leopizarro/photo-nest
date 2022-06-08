import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { IPhotoCard } from 'src/app/common/interfaces/photocard.interface';

@Component({
  selector: 'app-photocard',
  templateUrl: './photocard.component.html',
  styleUrls: ['./photocard.component.scss'],
})
export class PhotocardComponent implements OnInit {
  @Input() photoinfo: IPhotoCard;

  @Input() imgUrl: string;
  @Input() thumbnailUrl: string;
  @Input() title: string;
  @Input() subtitle: string;
  @Input() description: string;
  @Input() date: any;
  @Input() masonryLayout: boolean;
  @Output() clickEvent: EventEmitter<IPhotoCard>;

  constructor() {
    this.clickEvent = new EventEmitter();
  }

  ngOnInit() {}

  public emitClickEvent() {
    const modalProps: IPhotoCard = {
      imgUrl: this.imgUrl,
      thumbnailUrl: this.thumbnailUrl,
      title: this.title,
      subtitle: this.subtitle,
      description: this.description,
      date: this.date
    };
    this.clickEvent.emit(modalProps);
  }
}
