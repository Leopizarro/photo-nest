import { IButton } from './button.interface';
export interface BannerInformation {
  id: string;
  bannerClass: string;
  information: {
    id: string;
    title: string;
    description: string;
    button?: IButton;
    imageLocation?: string;
    image: {
      url: string;
      urlXS: string;
      urlS: string;
      urlM: string;
      urlL: string;
      urlXL: string;
      urlXXL: string;
    };
  };
}
