import { Injectable, OnDestroy, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NavigationService implements OnDestroy {
  public currentRoute: string;
  public routerSubscription: Subscription;

  constructor(
    private navCtrl: NavController,
    private router: Router
  ) { }

  public externalUrl(url: string) {
    return url.includes('http');
  }

  public goTo(url: string) {
    window.scroll(0, 0);
    if (!url) { return; }
    if (this.externalUrl(url)) { return this.windowOpen(url, '_self'); }
    this.navCtrl.navigateRoot(url, { animationDirection: 'forward' });
  }

  public windowOpen(externalUrl: string, type = '_blank') {
    return window.open(externalUrl, type);
  }

  public setCurrentRoute() {
    this.routerSubscription = this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd),
    ).subscribe((event: NavigationEnd) => {
      this.currentRoute = event.urlAfterRedirects;
    });
  }

  public isRoute(route: string, actualRoute: string) {
    if (route === actualRoute) {
      return true;
    } else {
      return false;
    }
  }

  ngOnDestroy() {
    this.routerSubscription.unsubscribe();
  }
}
