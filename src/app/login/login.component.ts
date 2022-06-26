import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

interface LoginForm {
  email: FormControl;
  password?: FormControl;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {
  forbiddenEmailValidator(EmailRe: RegExp): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const forbidden = EmailRe.test(control.value);
      return forbidden ? {forbiddenEmail: {value: control.value}} : null;
    };
  }
  constructor() { }

  Login ={
    email:'',
    password:'',
  };

   login = new FormGroup<LoginForm>({
      email: new FormControl('', [
        Validators.required,
        Validators.email,
        Validators.minLength(6),
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
    });


  ngOnInit(): void {

  }

  get email() { return this.login.get('email'); }

  get password() { return this.login.get('password'); }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.login.value);
  }
}
