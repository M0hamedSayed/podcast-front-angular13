import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SpeakerRegister } from 'src/app/core/models/speaker-register';
import { AuthService } from 'src/app/core/services/auth.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ValidationAuthService } from './../../../core/services/validation-auth.service';

@Component({
  selector: 'app-speaker-form',
  templateUrl: './speaker-form.component.html',
  styleUrls: ['./speaker-form.component.css']
})
export class SpeakerFormComponent implements OnInit {
  speaker: SpeakerRegister =
    {
      firstName: "",
      lastName: "",
      email: "",
      address: { city: "", building: NaN, street: NaN },
      password: "",
      passwordConfirm: "",
      personType: "speaker"
    };
  speakerForm!: FormGroup;
  errorMsg = '';

  constructor(private authService: AuthService, private fb: FormBuilder, private validate: ValidationAuthService) { }

  ngOnInit(): void {
    this.speakerForm = this.validate.speakerValidation(this.fb);
  }

  register() {
    console.log(this.speakerForm.value);

    //   this.authService.register(this.speaker).subscribe({
    //     next: result => console.log(result),
    //     error: (error: HttpErrorResponse) => {
    //       console.log(error.error);

    //       if (error.status == 400) {
    //         this.errorMsg = "User Email already Exists !"
    //       } else {
    //         this.errorMsg = "Something went wrong, pleas try again"
    //       }
    //     }
    //   });
  }
}
