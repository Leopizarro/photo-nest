import { Component, OnInit } from '@angular/core';
import { BANNERS_SPRAY } from 'src/app/common/constants/banners.constants';
import { BannerInformation } from 'src/app/common/interfaces/banner.interface';
import { IPhotoCard } from 'src/app/common/interfaces/photocard.interface';
import { ModalService } from 'src/app/services/modal/modal.service';
import { ModalComponent } from 'src/app/components/modal/modal.component';
import { IModal } from 'src/app/common/interfaces/modal.interface';
import { SLIDE_GENERIC_OPTIONS_HOME } from 'src/app/common/constants/slide-options.constants';
import { StorageService } from 'src/app/services/storage/storage.service';
import { LoadingService } from 'src/app/services/loading/loading.service';

@Component({
  selector: 'app-spraygallerypage',
  templateUrl: './spraygallery.page.html',
  styleUrls: ['./spraygallery.page.scss'],
})
export class SprayGalleryPage implements OnInit {
  public banners: BannerInformation[];
  public photos: IPhotoCard[];
  public slideOptions: any;
  public hideItem: boolean;

  constructor(private modalService: ModalService,
              private storageService: StorageService,
              private loadingService: LoadingService) {
    this.banners = BANNERS_SPRAY;
    this.photos = [];
    this.slideOptions = SLIDE_GENERIC_OPTIONS_HOME;
    this.hideItem = true;
  }

  ngOnInit() {
    this.getPostsInfo();
  }

  public async getPostsInfo(){
    this.hideItem = true;
    this.loadingService.presentLoading();
    this.photos = await this.storageService.getCollectionPosts('Galería Spraypaint');
    this.loadingService.dismissLoading();
    this.hideItem = false;
  }

  public showPhotoModal(photoData: IModal) {
    return this.modalService.presentModal(ModalComponent, photoData);
  }

}
