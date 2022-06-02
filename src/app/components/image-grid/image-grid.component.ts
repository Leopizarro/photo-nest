import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IModal } from 'src/app/common/interfaces/modal.interface';
import { IPhotoCard } from 'src/app/common/interfaces/photocard.interface';
import { ModalService } from 'src/app/services/modal/modal.service';
import { GalleryModalComponent } from '../gallery-modal/gallery-modal.component';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-image-grid',
  templateUrl: './image-grid.component.html',
  styleUrls: ['./image-grid.component.scss'],
})
export class ImageGridComponent implements OnInit {
  @Input() photos: IPhotoCard[];
  @Input() masonryLayout: boolean;
  @Input() hideImg: boolean;
  public currentRoute: string;

  constructor(private modalService: ModalService,
              private route: ActivatedRoute) {
                this.currentRoute = '';
              }

  ngOnInit() {
    this.currentRoute =  this.route.snapshot.routeConfig.path;
    console.log(this.currentRoute, 'aaa');
  }

  public showPhotoModal(photoData: IPhotoCard) {
    this.modalService.presentModal(ModalComponent, photoData);
  }

  public showGalleryModal(photoData: IPhotoCard, photoCollection: IPhotoCard[]){
    this.modalService.presentGalleryModal(GalleryModalComponent, photoData, this.photos, this.currentRoute);
  }
}
