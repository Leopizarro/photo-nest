import { IPhotoCard } from './photocard.interface';

export interface IModal {
    imgUrl?: string;
    title?: string;
    subtitle?: string;
    description?: string;
    date?: any;
}

export interface IGalleryModal {
    photosInfo: IPhotoCard[];
}
