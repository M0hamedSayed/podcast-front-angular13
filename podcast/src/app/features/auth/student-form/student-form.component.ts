import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { StudentRegister } from 'src/app/core/models/student-register';
import { AuthService } from 'src/app/core/services/auth.service';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { ValidationAuthService } from './../../../core/services/validation-auth.service';

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

  errorMsg = '';
  loading: boolean = false;
  constructor(private authService: AuthService, private fb: FormBuilder, private validate: ValidationAuthService) { }

  ngOnInit(): void {
    this.studentForm = this.validate.studentValidation(this.fb);
  }



  register() {
    console.log(this.studentForm.value);
    this.loading = true;
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
