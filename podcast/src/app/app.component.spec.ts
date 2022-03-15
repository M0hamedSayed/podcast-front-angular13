import { Location } from "@angular/common";
import { TestBed, fakeAsync, tick } from '@angular/core/testing';
import { RouterTestingModule } from "@angular/router/testing";
import { Router } from "@angular/router";
import { AppComponent } from './app.component';
import { routes } from "./app-routing.module";
import { HttpClientModule } from "@angular/common/http";

describe('AppComponent', () => {
  let location: Location;
  let router: Router;
  let fixture;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        RouterTestingModule.withRoutes(routes),

      ],
      declarations: [
        AppComponent
      ]
    }).compileComponents();
    router = TestBed.inject(Router);
    location = TestBed.inject(Location);

    fixture = TestBed.createComponent(AppComponent);
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });



  it('navigate to "" redirects you to /home', (async () => {
    await router.navigate([''])
    expect(location.path()).toBe('/home');
  }));

  it('navigate to "home" redirects you to /home', (() => {
    const navigateSpy = spyOn(router, 'navigate');
    router.navigate(['/home'])
    expect(navigateSpy).toHaveBeenCalledWith(['/home']);
  }));
  it('navigate to "register/speaker" redirects you to /home', (async () => {
    await router.navigate(['/register/speaker'])
    expect(location.path()).toBe('/register/speaker');
  }));
  it('navigate to "register" redirects you to /signup', (async () => {
    await router.navigate(['/register'])
    expect(location.path()).toBe('/signup');
  }));
});
