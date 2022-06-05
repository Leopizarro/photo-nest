import { BannerInformation } from '../interfaces/banner.interface';

export const BANNERS_SPRAY: BannerInformation[] = [
    {
        id: '1',
        bannerClass: 'description-container centered-left',
        information: {
            id: '1',
            title: 'Galería spraypaint',
            description: 'Fotografías de trabajos con latas de pintura',
            imageLocation: 'lcoation',
            image: {
            url: './assets/banner-spray.jpg',
            },
        }
    },
    {
        id: '2',
        bannerClass: 'description-container centered-right visit-mobile-gallery',
        information: {
            id: '2',
            title: '¡Visita la Galería Mobile!',
            description: 'Fotografía mobile exclusivamente',
            button: {
                label: 'Visitar Galería Mobile',
                buttonClass: 'banner-button bluesky-gradient-button',
                icon: 'string',
                route: 'mobile'
            },
            imageLocation: 'location',
            image: {
            url: './assets/phone-banner2.jpg',
            },
        }
    },
];

export const BANNERS_CELLPHONE: BannerInformation[] = [
    {
        id: '1',
        bannerClass: 'description-container centered-left',
        information: {
            id: '1',
            title: 'Galería mobile',
            description: 'Fotografías tomadas con smartphones',
            imageLocation: 'lcoation',
            image: {
            url: './assets/phone-banner.jpg',
            },
        }
    },
    {
        id: '2',
        bannerClass: 'description-container centered visit-spraypaint-gallery',
        information: {
            id: '2',
            title: '¡Visita la Galería Spraypaint!',
            description: 'Fotografías de trabajos spraypaint',
            button: {
                label: 'Visitar Galería Spraypaint',
                buttonClass: 'banner-button noonsky-gradient-button',
                icon: 'string',
                route: 'spraypaint'
            },
            imageLocation: 'location',
            image: {
            url: './assets/spray1.jpg',
            },
        }
    },
];

