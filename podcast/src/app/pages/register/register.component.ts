import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { scale } from 'src/app/core/utils/route-animation';
import { SpeakerRegister } from './../../core/models/speaker-register';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  animations: [scale]
})
export class RegisterComponent implements OnInit {
  speaker: SpeakerRegister =
    {
      firstName: "",
      lastName: "",
      email: "",
      address: { city: "", building: 0, street: 0 },
      password: "",
      passwordConfirm: "",
      personType: "speaker"
    };

  errorMsg = '';

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  register() {
    console.log(this.speaker);

    this.authService.register(this.speaker).subscribe({
      next: result => console.log(result),
      error: (error: HttpErrorResponse) => {
        console.log(error.error);

        if (error.status == 400) {
          this.errorMsg = "User Email already Exists !"
        } else {
          this.errorMsg = "Something went wrong, pleas try again"
        }
      }
    });
  }

}
