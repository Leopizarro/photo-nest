import { Component, HostListener, Input, OnInit, ViewChild } from '@angular/core';
import { IonSlides, ModalController } from '@ionic/angular';
import { UnsubscriptionError } from 'rxjs';
import { PHOTOCARDS } from 'src/app/common/constants/photocard.constants';
import { SLIDE_BASE_OPTIONS } from 'src/app/common/constants/slide-options.constants';
import { IPhotoCard } from 'src/app/common/interfaces/photocard.interface';
import { SliderComponent } from '../slider/slider.component';

@Component({
  selector: 'app-gallery-modal',
  templateUrl: './gallery-modal.component.html',
  styleUrls: ['./gallery-modal.component.scss'],
})
export class GalleryModalComponent implements OnInit{
  @ViewChild('slides', { static: true }) public slides: IonSlides;
  @Input() clickedPhotoInfo: IPhotoCard;
  @Input() photoCollection: IPhotoCard[];
  @Input() currentRoute: string;
  public enableInfobox: boolean;
  public windowWidth: number;
  public windowHeight: number;
  public sliderOptions: any;
  public imagesForModal: IPhotoCard[];
  public isSprayGallery: boolean;


  constructor(private modal: ModalController) {
    this.clickedPhotoInfo = null;
    this.photoCollection = [];
    this.sliderOptions = SLIDE_BASE_OPTIONS;
    this.imagesForModal = [];
    this.enableInfobox = true;
    this.isSprayGallery = true;
  }

  @HostListener('window:resize', ['$event'])
    onResize(event) {
        this.setWidth();
    }


  ngOnInit() {
    this.isSprayRoute(this.currentRoute);
    this.reorderImages(this.photoCollection,this.clickedPhotoInfo);
  }

  public reorderImages(photoCollection: IPhotoCard[], photo: IPhotoCard) {
    this.imagesForModal = [...photoCollection];
    let position = 0;
    this.imagesForModal.forEach(element => {
      if (element.imgUrl === photo.imgUrl){
        const photoSpliced = this.imagesForModal.splice(0, position);
        photoSpliced.forEach(photoItem =>{
          this.imagesForModal.push(photoItem);
        });
      }
      position = position + 1;
    });
  }

  public triggerInfobox() {
    if (this.enableInfobox === false) {
      this.enableInfobox = true;
      return null;
    }else{
      this.enableInfobox = false;
      return null;
    }
  }

  public isSprayRoute(route: string) {
    if(route === 'spraypaint'){
      this.isSprayGallery = true;
      return null;
    }else{
      this.isSprayGallery = false;
      return null;
    }
  }

  public setWidth() {
    this.windowWidth = window.innerWidth;
  }

  public dismissModal() {
    this.modal.dismiss();
  }

}
