import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SpeakerRegister } from '../models/speaker-register';
import { StudentRegister } from './../models/student-register';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authUrl = 'http://144.21.58.173';

  constructor(private http: HttpClient) { }


  register(registerData: SpeakerRegister | StudentRegister) {
    return this.http.post<SpeakerRegister | StudentRegister>(`${this.authUrl}/register`, registerData);
  }//handle registration for speaker and student
}
