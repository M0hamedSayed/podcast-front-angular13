import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
    let component: LoginComponent;
    let fixture: ComponentFixture<LoginComponent>;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ReactiveFormsModule, HttpClientModule],
            declarations: [LoginComponent]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(LoginComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    describe("test email input", () => {
        let email: HTMLInputElement;
        let emailReactive: any;
        let regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        beforeEach(() => {
            email = fixture.nativeElement.querySelector('#email');
            emailReactive = fixture.componentInstance.loginForm;
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

    describe("test password input", () => {
        let password: HTMLInputElement;
        let passReactive: any;
        let regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
        beforeEach(() => {
            password = fixture.nativeElement.querySelector('#password');
            passReactive = fixture.componentInstance.loginForm;
        });
        it('password inputs match with ms@gmail.com value', () => {
            password.value = "Ms123456"
            expect(password.value).toMatch(regex)
        })
        it("password inputs doesn't match with mohamed value", () => {
            password.value = "mohamed"
            expect(password.value).not.toMatch(regex)
        })
        it('password inputs test with reactive form', () => {
            password.value = "Ms123456"
            password.dispatchEvent(new Event('input'));
            expect(passReactive.value.password).toBe(password.value)
            expect(passReactive.value.password).toBeTruthy();
        })
        it('password inputs test with reactive form validation', () => {
            password.value = "Ms123456"
            password.dispatchEvent(new Event('input'));
            expect(passReactive.get('password').errors).toBeFalsy();
        })
        it("password inputs test with reactive form validation 'required'", () => {
            password.value = ""
            password.dispatchEvent(new Event('input'));
            expect(passReactive.get('password').errors).toBeTruthy();
        })
        it("password inputs test with reactive form validation 'regex'", () => {
            password.value = "Mohamed"
            password.dispatchEvent(new Event('input'));
            expect(passReactive.get('password').errors).toBeTruthy();
        })
    })
});