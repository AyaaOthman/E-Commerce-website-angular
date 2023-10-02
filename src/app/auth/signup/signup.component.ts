import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { matchpassword } from 'src/app/matchpassword.validator';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  signUpForm: FormGroup;
  constructor() {
    this.signUpForm = new FormGroup(
      {
        signUpName: new FormControl('', [
          Validators.required,
          Validators.minLength(3),
        ]),
        signUpEmail: new FormControl('', [
          Validators.email,
          Validators.required,
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
        ]),
        userName: new FormControl('', [
          Validators.required,
          Validators.pattern('^[a-zA-Z0-9.-_$@*!]{3,30}$'),
        ]),
        signUpPassword: new FormControl('', [
          Validators.required,
          Validators.pattern('^(?=.*d)(?=.*[a-z])(?=.*[A-Z]).{8,}$'),
        ]),
        repeatedPassword: new FormControl('', [Validators.required]),
      },
      { validators: matchpassword }
    );
  }
  handelSignUpSubmit() {
    console.log(this.signUpForm);
  }
}
