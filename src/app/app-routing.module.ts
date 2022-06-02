import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AboutPage } from './pages/about/about.page';
import { LandingPage } from './pages/landing/landing.page';
import { LoginPage } from './pages/login/login.page';
import { NewpostPage } from './pages/newpost/newpost.page';
import { PhotoGalleryPage } from './pages/photogallery/photogallery.page';
import { SprayGalleryPage } from './pages/spraygallery/spraygallery.page';
import { AngularFireAuthGuard } from '@angular/fire/compat/auth-guard';
import {
  ABOUT_ROUTE_CONSTANT,
  LANDING_ROUTE_COSNTANT,
  LOGIN_ROUTE_CONSTANT,
  MOBILE_GALLERY_ROUTE_CONSTANT,
  NEWPOST_ROUTE_CONSTANT,
  SPRAYPAINT_GALLERY_ROUTE_CONSTANT
} from './common/constants/route.constants';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'landing',
    pathMatch: 'full'
  },
  {
    path: LANDING_ROUTE_COSNTANT,
    component: LandingPage,
    loadChildren: () => import('./pages/landing/landing.module').then((m) => m.LandingPageModule)
  },
  {
    path: MOBILE_GALLERY_ROUTE_CONSTANT,
    component: PhotoGalleryPage,
    loadChildren: () => import('./pages/photogallery/photogallery.module').then( m => m.PhotoGalleryPageModule)
  },
  {
    path: SPRAYPAINT_GALLERY_ROUTE_CONSTANT,
    component: SprayGalleryPage,
    loadChildren: () => import('./pages/spraygallery/spraygallery.module').then( m => m.SprayGalleryPageModule)
  },
  {
    path: ABOUT_ROUTE_CONSTANT,
    component: AboutPage,
    loadChildren: () => import('./pages/about/about.module').then( m => m.AboutPageModule)
  },
  {
    path: NEWPOST_ROUTE_CONSTANT,
    component: NewpostPage,
    canActivate: [AngularFireAuthGuard],
    loadChildren: () => import('./pages/newpost/newpost.module').then( m => m.NewpostPageModule)
  },
  {
    path: LOGIN_ROUTE_CONSTANT,
    component: LoginPage,
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: '**',
    redirectTo: LOGIN_ROUTE_CONSTANT
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
