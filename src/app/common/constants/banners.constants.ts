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
            urlXS: './assets/spraypaintbanner_576px.jpg',
            urlS: './assets/spraypaintbanner_768px.jpg',
            urlM: './assets/spraypaintbanner_992px.jpg',
            urlL: './assets/spraypaintbanner_1200px.jpg',
            urlXL: './assets/spraypaintbanner_1920px.jpg',
            urlXXL: './assets/spraypaintbanner_2560px.jpg',
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
            urlXS: './assets/phonebanner2_576px.jpg',
            urlS: './assets/phonebanner2_768px.jpg',
            urlM: './assets/phonebanner2_992px.jpg',
            urlL: './assets/phonebanner2_1200px.jpg',
            urlXL: './assets/phonebanner2_1920px.jpg',
            urlXXL: './assets/phonebanner2_2560px.jpg',
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
            urlXS: './assets/phonebanner_576px.jpg',
            urlS: './assets/phonebanner_768px.jpg',
            urlM: './assets/phonebanner_992px.jpg',
            urlL: './assets/phonebanner_1200px.jpg',
            urlXL: './assets/phonebanner_1920px.jpg',
            urlXXL: './assets/phonebanner_2560px.jpg',
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
            urlXS: './assets/spraybanner_576px.jpg',
            urlS: './assets/spraybanner_768px.jpg',
            urlM: './assets/spraybanner_992px.jpg',
            urlL: './assets/spraybanner_1200px.jpg',
            urlXL: './assets/spraybanner_1920px.jpg',
            urlXXL: './assets/spraybanner_2560px.jpg',
            },
        }
    },
];

