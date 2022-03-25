import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SpeakerRegister } from 'src/app/core/models/speaker-register';
import { AuthService } from 'src/app/core/services/auth.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ValidationAuthService } from './../../../core/services/validation-auth.service';
import Swal from 'sweetalert2';
import { alertConfig } from 'src/app/core/utils/sweetAlert';
import { Router } from '@angular/router';
@Component({
  selector: 'app-speaker-form',
  templateUrl: './speaker-form.component.html',
  styleUrls: ['./speaker-form.component.css']
})
export class SpeakerFormComponent implements OnInit {
  // speaker: SpeakerRegister =
  //   {
  //     firstName: "",
  //     lastName: "",
  //     email: "",
  //     address: { city: "", building: NaN, street: NaN },
  //     password: "",
  //     passwordConfirm: "",
  //     personType: "speaker"
  //   };
  speakerForm!: FormGroup;
  loading: boolean = false;
  constructor(private authService: AuthService, private fb: FormBuilder, private validate: ValidationAuthService, private router: Router) { }

  ngOnInit(): void {
    this.speakerForm = this.validate.speakerValidation(this.fb);
  }

  register() {
    const speaker: SpeakerRegister =
    {
      firstName: this.speakerForm.value.firstName,
      lastName: this.speakerForm.value.lastName,
      email: this.speakerForm.value.email,
      address: {
        city: this.speakerForm.value.city,
        building: this.speakerForm.value.building,
        street: this.speakerForm.value.street
      },
      password: this.speakerForm.value.passwordGroup.password,
      passwordConfirm: this.speakerForm.value.passwordGroup.passwordConfirm,
      personType: "speaker"
    };
    console.log(this.speakerForm);
    console.log(speaker);

    this.speakerForm.reset();
    this.loading = true;
    // const toast = alertConfig(true)
    // toast.fire({
    //   icon: 'warning',
    //   title: 'registered successfully',
    //   text: 'hhhhhhhhhhhhhhhhhhhhh',
    //   // toast: true,
    //   position: 'top-start',
    // })
    this.authService.register(speaker).subscribe({
      next: result => {
        alertConfig(true, () => { this.router.navigate(['/home']); this.loading = false; }).fire({
          icon: 'success',
          title: 'registered successfully',
          position: 'top-start',
        })
        console.log(result)
      },
      error: (error: HttpErrorResponse) => {
        console.log(error.error.Error);
        alertConfig('', () => { this.loading = false; }).fire({
          icon: 'warning',
          title: error.error.Error,
          position: 'center',
        })

      }
    });
  }
}
