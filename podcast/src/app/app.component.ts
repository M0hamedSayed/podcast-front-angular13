import { Component, OnInit } from '@angular/core';
import { opacity } from './core/utils/route-animation';
import {
  transition,
  trigger,
  query,
  style,
  animate,
  group,
  animateChild
} from '@angular/animations';
import { NavigationStart, Router, RouterOutlet } from '@angular/router';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    opacity
  ]
})



export class AppComponent implements OnInit {
  subscription!: Subscription;
  browserRefresh = false;
  constructor(public router: Router) {
    this.subscription = router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        console.log(router.navigated);

        this.browserRefresh = !router.navigated;
      }
    });
  }
  ngOnInit(): void {

  }

  prepareRoute(outlet: RouterOutlet) {
    // console.log(!this.browserRefresh);
    if (!this.browserRefresh)
      return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
    return false;
  }
}