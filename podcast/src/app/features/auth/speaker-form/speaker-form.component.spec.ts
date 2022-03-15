import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ReactiveFormsModule } from '@angular/forms';
import { SpeakerFormComponent } from "./speaker-form.component";

describe("SpeakerFormComponent", () => {
  let component: SpeakerFormComponent;
  let fixture: ComponentFixture<SpeakerFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SpeakerFormComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],

      imports: [HttpClientModule, ReactiveFormsModule]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeakerFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    // myService = TestBed.inject(MyService);
  });

  describe('test speaker form component', () => {
    it('should ...', () => {
      expect(component).toBeTruthy();
    });

    describe("test first name input", () => {
      let firstName: HTMLInputElement;
      let firstReactive: any;
      let regex = /^[A-Za-z]+$/;
      beforeEach(() => {
        firstName = fixture.nativeElement.querySelector('#firstName');
        firstReactive = fixture.componentInstance.speakerForm;
      });
      it('firstName inputs match with mohamed value', () => {
        firstName.value = "mohamed"
        expect(firstName.value).toMatch(regex)
      })
      it("firstName inputs doesn't match with moh22med value", () => {
        firstName.value = "moh22med"
        expect(firstName.value).not.toMatch(regex)
      })
      it('firstName inputs test with reactive form', () => {
        firstName.value = "ms@gmail.com"
        firstName.dispatchEvent(new Event('input'));
        expect(firstReactive.value.firstName).toBe(firstName.value)
        expect(firstReactive.value.firstName).toBeTruthy();
      })
      it('firstName inputs test with reactive form validation', () => {
        firstName.value = "mohamed"
        firstName.dispatchEvent(new Event('input'));
        expect(firstReactive.get('firstName').errors).toBeFalsy();
      })
      it("firstName inputs test with reactive form validation 'required'", () => {
        firstName.value = ""
        firstName.dispatchEvent(new Event('input'));
        expect(firstReactive.get('firstName').errors).toBeTruthy();
      })
      it("firstName inputs test with reactive form validation 'regex'", () => {
        firstName.value = "Mo321ed"
        firstName.dispatchEvent(new Event('input'));
        expect(firstReactive.get('firstName').errors).toBeTruthy();
      })
    });

    describe("test last name input", () => {
      let lastName: HTMLInputElement;
      let lastReactive: any;
      let regex = /^[A-Za-z]+$/;
      beforeEach(() => {
        lastName = fixture.nativeElement.querySelector('#lastName');
        lastReactive = fixture.componentInstance.speakerForm;
      });
      it('lastName inputs match with mohamed value', () => {
        lastName.value = "sayed"
        expect(lastName.value).toMatch(regex)
      })
      it("lastName inputs doesn't match with moh22med value", () => {
        lastName.value = "moh22med"
        expect(lastName.value).not.toMatch(regex)
      })
      it('lastName inputs test with reactive form', () => {
        lastName.value = "sayed"
        lastName.dispatchEvent(new Event('input'));
        expect(lastReactive.value.lastName).toBe(lastName.value)
        expect(lastReactive.value.lastName).toBeTruthy();
      })
      it('firstName inputs test with reactive form validation', () => {
        lastName.value = "sayed"
        lastName.dispatchEvent(new Event('input'));
        expect(lastReactive.get('lastName').errors).toBeFalsy();
      })
      it("lastName inputs test with reactive form validation 'required'", () => {
        lastName.value = ""
        lastName.dispatchEvent(new Event('input'));
        expect(lastReactive.get('lastName').errors).toBeTruthy();
      })
      it("lastName inputs test with reactive form validation 'regex'", () => {
        lastName.value = "Mo321ed"
        lastName.dispatchEvent(new Event('input'));
        expect(lastReactive.get('lastName').errors).toBeTruthy();
      })
    });

    describe("test email input", () => {
      let email: HTMLInputElement;
      let emailReactive: any;
      let regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      beforeEach(() => {
        email = fixture.nativeElement.querySelector('#email');
        emailReactive = fixture.componentInstance.speakerForm;
      });
      it('email inputs match with ms@gmail.com value', () => {
        email.value = "ms@gmail.com"
        expect(email.value).toMatch(regex)
      })
      it("email inputs doesn't match with mohamed value", () => {
        email.value = "mohamed"
        expect(email.value).not.toMatch(regex)
      })
      it('email inputs test with reactive form', () => {
        email.value = "ms@gmail.com"
        email.dispatchEvent(new Event('input'));
        expect(emailReactive.value.email).toBe(email.value)
        expect(emailReactive.value.email).toBeTruthy();
      })
      it('email inputs test with reactive form validation', () => {
        email.value = "ms@gmail.com"
        email.dispatchEvent(new Event('input'));
        expect(emailReactive.get('email').errors).toBeFalsy();
      })
      it("email inputs test with reactive form validation 'required'", () => {
        email.value = ""
        email.dispatchEvent(new Event('input'));
        expect(emailReactive.get('email').errors).toBeTruthy();
      })
      it("email inputs test with reactive form validation 'regex'", () => {
        email.value = "Mohamed"
        email.dispatchEvent(new Event('input'));
        expect(emailReactive.get('email').errors).toBeTruthy();
      })
    })
  });


})