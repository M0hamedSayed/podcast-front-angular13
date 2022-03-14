import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ValidationAuthService } from './../../core/services/validation-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  constructor(private authService: AuthService, private fb: FormBuilder, private validate: ValidationAuthService) { }

  ngOnInit(): void {
    this.loginForm = this.validate.loginValidation(this.fb)
  }

}
