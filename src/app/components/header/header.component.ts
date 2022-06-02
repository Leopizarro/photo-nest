import { Component, Input, OnInit } from '@angular/core';
import { NavigationService } from 'src/app/services/navigation/navigation.service';
import { AuthService } from 'src/app/services/auth/auth.service';
import { IButton } from 'src/app/common/interfaces/button.interface';
import { HEADER_BUTTON_LOGOUT_CONSTANTS, HEADER_BUTTON_NEWPOST_CONSTANTS } from 'src/app/common/constants/button.constants';
import {
  ABOUT_ROUTE_CONSTANT,
  LANDING_ROUTE_COSNTANT,
  LOGIN_ROUTE_CONSTANT,
  MOBILE_GALLERY_ROUTE_CONSTANT,
  NEWPOST_ROUTE_CONSTANT,
  SPRAYPAINT_GALLERY_ROUTE_CONSTANT
} from 'src/app/common/constants/route.constants';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {

  @Input() headerTitle: string;
  @Input() currentRoute: string;
  public asdRoute: string;
  public newPostButtonDescription: IButton;
  public logoutButtonDescription: IButton;
  public spraypaintRoute: string;
  public mobileRoute: string;
  public newpostRoute: string;
  public landingRoute: string;
  public loginRoute: string;
  public aboutRoute: string;


  constructor(private navService: NavigationService,
              public authService: AuthService
              ) {
    this.headerTitle = '';
    this.getCurrentUserInfo();
    this.newPostButtonDescription = HEADER_BUTTON_NEWPOST_CONSTANTS;
    this.logoutButtonDescription = HEADER_BUTTON_LOGOUT_CONSTANTS;
    this.spraypaintRoute = SPRAYPAINT_GALLERY_ROUTE_CONSTANT;
    this.mobileRoute = MOBILE_GALLERY_ROUTE_CONSTANT;
    this.newpostRoute = NEWPOST_ROUTE_CONSTANT;
    this.landingRoute = LANDING_ROUTE_COSNTANT;
    this.loginRoute = LOGIN_ROUTE_CONSTANT;
    this.aboutRoute = ABOUT_ROUTE_CONSTANT;
   }

  public goToRoute(route: string) {
    this.navService.goTo(route);
  }

  public isRoute(route: string) {
    if ('/' + route === this.currentRoute) {
      return true;
    } else {
      return false;
    }
  }

  public async getCurrentUserInfo() {
    this.authService.asd();
    this.authService.isUserLoggedIn();
  }

  public logoutUser() {
    this.authService.logoutUser();
  }
}
