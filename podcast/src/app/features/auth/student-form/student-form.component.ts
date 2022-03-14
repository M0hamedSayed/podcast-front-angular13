import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { StudentRegister } from 'src/app/core/models/student-register';
import { AuthService } from 'src/app/core/services/auth.service';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { ValidationAuthService } from './../../../core/services/validation-auth.service';

function passwordMatcher(c: AbstractControl): ValidationErrors | null {
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

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements OnInit {
  student: StudentRegister =
    {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      passwordConfirm: "",
      personType: "student"
    };

  studentForm!: FormGroup;
  // passwordGroup!: FormGroup

  errorMsg = '';

  constructor(private authService: AuthService, private fb: FormBuilder, private validate: ValidationAuthService) { }

  ngOnInit(): void {

    this.studentForm = this.validate.studentValidation(this.fb);

    // this.studentForm = ;
    // this.studentForm = this.fb.group({
    //   firstName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20), Validators.pattern(/^[A-Za-z]+$/)]],
    //   lastName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20), Validators.pattern(/^[A-Za-z]+$/)]],
    //   email: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)]],
    //   passwordGroup: this.fb.group({
    //     password: ['', [Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/)]],
    //     passwordConfirm: ['', [Validators.required]]
    //   }, {
    //     validator: [passwordMatcher]
    //   }),
    // })
  }



  register() {
    console.log(this.studentForm.value);

    // this.authService.register(this.student).subscribe({
    //   next: result => console.log(result),
    //   error: (error: HttpErrorResponse) => {
    //     console.log(error.error);

    //     if (error.status == 400) {
    //       this.errorMsg = "User Email already Exists !"
    //     } else {
    //       this.errorMsg = "Something went wrong, pleas try again"
    //     }
    //   }
    // });
  }

}
