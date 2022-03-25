import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ValidationAuthService } from './../../../core/services/validation-auth.service';

@Component({
  selector: 'app-forgetpass',
  templateUrl: './forgetpass.component.html',
  styleUrls: ['./forgetpass.component.css']
})
export class ForgetpassComponent implements OnInit {

  userEmail!: FormGroup;

  constructor(private fb: FormBuilder, private validate: ValidationAuthService) { }

  ngOnInit(): void {
    this.userEmail = this.validate.emailValidation(this.fb);
  }

}
