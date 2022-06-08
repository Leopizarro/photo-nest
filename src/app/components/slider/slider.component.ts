import { Component, ViewChild, Input, OnInit } from '@angular/core';
import { SlidesComponent } from '../../components/slides/slides.component';
import { IonSlides, ModalController } from '@ionic/angular';
import { SLIDE_FADE_OPTIONS, SLIDE_GENERIC_OPTIONS_HOME } from '../../common/constants/slide-options.constants';
import { NavigationService } from '../../services/navigation/navigation.service';
import { BannerInformation } from '../../common/interfaces/banner.interface';
import { IPhotoCard } from 'src/app/common/interfaces/photocard.interface';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent extends SlidesComponent {
  @ViewChild('slides', { static: true }) public slides: IonSlides;
  @Input() public banners: BannerInformation[];
  @Input() public slideOptions: any;

  constructor(private navService: NavigationService,
              private modal: ModalController) {
    super();
  }
  public goTo(route: string) {
    this.navService.goTo(route);
  }

  public dismissModal() {
    this.modal.dismiss();
  }

  public changeSlide(direction: 'previous' | 'next') {
    return direction === 'previous' ? this.slides.slidePrev() :
     this.slides.slideNext();
  }
}
