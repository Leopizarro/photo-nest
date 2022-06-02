import { Component, OnInit } from '@angular/core';
import { TouchSequence } from 'selenium-webdriver';
import { ABOUT_ROUTE_CONSTANT } from 'src/app/common/constants/route.constants';
import { NavigationService } from 'src/app/services/navigation/navigation.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  public aboutRoute: string;

  constructor(private navService: NavigationService) {
    this.aboutRoute = ABOUT_ROUTE_CONSTANT;
  }

  ngOnInit() {}

  public goToRoute(route: string) {
    this.navService.goTo(route);
  }

}
