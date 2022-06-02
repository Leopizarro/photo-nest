import { Component, OnInit, OnDestroy, ViewChild,  } from '@angular/core';
import { Router,  NavigationEnd } from '@angular/router';
import { IonSlides } from '@ionic/angular';
import { Observable, Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { AuthService } from './services/auth/auth.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  @ViewChild('slides', { static: true }) public slides: IonSlides;
  public headerTitle: string;
  public currentRoute: string;
  public isUserLogged: Observable<any>;
  private routerSubscription: Subscription;

  constructor(
    private router: Router,
    private authService: AuthService
  ) {
    this.headerTitle = 'photo-nest';
    this.currentRoute = '';
  }

  async ngOnInit() {
   this.setCurrentRoute();
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
