import { Component, OnInit } from '@angular/core';
import { MOBILE_LANDING_BUTTON_CONSTANT, SPRAYPAINT_LANDING_BUTTON_CONSTANT } from 'src/app/common/constants/button.constants';
import { MOBILE_GALLERY_ROUTE_CONSTANT, SPRAYPAINT_GALLERY_ROUTE_CONSTANT } from 'src/app/common/constants/route.constants';
import { IButton } from 'src/app/common/interfaces/button.interface';
import { NavigationService } from 'src/app/services/navigation/navigation.service';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
})
export class LandingPage implements OnInit {
  public spraypaintRoute: string;
  public mobileRoute: string;
  public spraypaintButton: IButton;
  public mobileButton: IButton;

  constructor(private navService: NavigationService) {
    this.spraypaintRoute = SPRAYPAINT_GALLERY_ROUTE_CONSTANT;
    this.mobileRoute = MOBILE_GALLERY_ROUTE_CONSTANT;
    this.spraypaintButton = SPRAYPAINT_LANDING_BUTTON_CONSTANT;
    this.mobileButton = MOBILE_LANDING_BUTTON_CONSTANT;
  }

  ngOnInit() {
  }

  public routeClick(url: string) {
    this.navService.goTo(url);
  }

}
