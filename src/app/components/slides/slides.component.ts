import { IonSlides } from '@ionic/angular';
import { SLIDE_BASE_OPTIONS } from '../../common/constants/slide-options.constants';

export class SlidesComponent {
  public slides: IonSlides;
  public slideOpts: any;

  constructor() {
    this.slideOpts = SLIDE_BASE_OPTIONS;
   }

  public changeSlide(direction: 'previous' | 'next') {
    return direction === 'previous' ? this.slides.slidePrev() :
     this.slides.slideNext();
  }

}
