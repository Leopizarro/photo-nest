import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IPhotoCard } from 'src/app/common/interfaces/photocard.interface';
import { ModalService } from 'src/app/services/modal/modal.service';
import { GalleryModalComponent } from '../gallery-modal/gallery-modal.component';

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

  public showGalleryModal(photoData: IPhotoCard){
    this.modalService.presentGalleryModal(GalleryModalComponent, photoData, this.photos, this.currentRoute);
  }
}
