import { Injectable } from '@angular/core';
import { FormBuilder, Validators, AbstractControl, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidationAuthService {
  emailValidation = (fb: FormBuilder) => {
    // return fb.control({value:'', Validators:[Validators.required, Validators.pattern(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)]})
    return fb.group({ email: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)]] })
  }

  speakerValidation = (fb: FormBuilder) => {
    return fb.group({
      firstName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20), Validators.pattern(/^[A-Za-z]+$/)]],
      lastName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20), Validators.pattern(/^[A-Za-z]+$/)]],
      email: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)]],

      city: ['', [Validators.required, Validators.pattern(/^[A-Za-z]{3,20}$/)]],
      building: ['', [Validators.required, Validators.min(0), Validators.max(100)]],
      street: ['', [Validators.required, Validators.min(0), Validators.max(100)]]
      ,
      passwordGroup: fb.group({
        password: ['', [Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/)]],
        passwordConfirm: ['', [Validators.required]]
      }, {
        validator: [this.passwordMatcher]
      }),
    })
  }

  studentValidation = (fb: FormBuilder) => {
    return fb.group({
      firstName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20), Validators.pattern(/^[A-Za-z]+$/)]],
      lastName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20), Validators.pattern(/^[A-Za-z]+$/)]],
      email: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)]],
      passwordGroup: fb.group({
        password: ['', [Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/)]],
        passwordConfirm: ['', [Validators.required]]
      }, {
        validator: [this.passwordMatcher]
      }),
    })
  }

  loginValidation = (fb: FormBuilder) => {
    return fb.group({
      email: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)]],
      password: ['', [Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/)]],

    })
  }

  passwordMatcher(c: AbstractControl): ValidationErrors | null {
    const password = c.get('password');
    const passwordConfirm = c.get('passwordConfirm');
    if (password && passwordConfirm) {
      if (password.pristine || passwordConfirm.pristine) {
        return null;
      }

      if (password.value === passwordConfirm.value) {
        return null;
      }
      return ({ match: true });
    }
    return null;
  }
  constructor() { }

}
