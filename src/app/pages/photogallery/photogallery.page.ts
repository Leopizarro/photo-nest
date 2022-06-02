import { Component, OnInit } from '@angular/core';
import { BANNERS_CELLPHONE } from 'src/app/common/constants/banners.constants';
import { SLIDE_GENERIC_OPTIONS_HOME } from 'src/app/common/constants/slide-options.constants';
import { BannerInformation } from 'src/app/common/interfaces/banner.interface';
import { IPhotoCard } from 'src/app/common/interfaces/photocard.interface';
import { LoadingService } from 'src/app/services/loading/loading.service';
import { NavigationService } from 'src/app/services/navigation/navigation.service';
import { StorageService } from 'src/app/services/storage/storage.service';


@Component({
  selector: 'app-photogallery',
  templateUrl: './photogallery.page.html',
  styleUrls: ['./photogallery.page.scss'],
})
export class PhotoGalleryPage implements OnInit {
  public banners: BannerInformation[];
  public photos: IPhotoCard[];
  public slideOptions: any;
  public image: any;
  public hideItems: boolean;


  constructor(private navService: NavigationService,
              private storageService: StorageService,
              private loadingService: LoadingService) {
    this.slideOptions = SLIDE_GENERIC_OPTIONS_HOME;
    this.banners = BANNERS_CELLPHONE;
    this.photos = [];
    this.hideItems = true;
  }

  ngOnInit() {
    this.getPostsInfo();
  }

  public redirectTo(url: string) {
    this.navService.goTo(url);
  }

  public async getPostsInfo(){
    this.hideItems = true;
    this.loadingService.presentLoading();
    this.photos = await this.storageService.getCollectionPosts('Galería Mobile');
    this.loadingService.dismissLoading();
    this.hideItems = false;
  }

}
