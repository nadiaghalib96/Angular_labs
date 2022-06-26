import { Component, HostListener, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { ComponentCanDeactivate } from '../pending-changes.guard';

interface RegisterForm {
  email: FormControl;
  name: FormControl;
  password?: FormControl;
  password_repet?: FormControl;
  address: FormGroup;
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit, ComponentCanDeactivate {
  @HostListener('window:beforeunload')
  canDeactivate(): boolean {
    // insert logic to check if there are pending changes here;
    // returning true will navigate without confirmation
    // returning false will show a confirm dialog before navigating away
    return false;
  }

  forbiddenEmailValidator(EmailRe: RegExp): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const forbidden = EmailRe.test(control.value);
      return forbidden ? {forbiddenEmail: {value: control.value}} : null;
    };
  }
  constructor() { }

  Register ={
    name:'',
    email:'',
    password:'',
    password_repet:'',
  };

   register = new FormGroup<RegisterForm>({
      email: new FormControl(this.Register.email, [
        Validators.required,
        Validators.email,
        Validators.minLength(6),
      ]),
      password: new FormControl(this.Register.password, [
        Validators.required,
        Validators.minLength(8),
      ]),
      password_repet: new FormControl(this.Register.password_repet, [
        Validators.required,
        Validators.minLength(8),
      ]),
      name: new FormControl(this.Register.name, [
        Validators.required,
        Validators.minLength(6),
      ]),
      address: new FormGroup({
        street: new FormControl(''),
        city: new FormControl(''),
        state: new FormControl(''),
        zip: new FormControl('')
      })
    });


  ngOnInit(): void {

  }

  onBeforeUnload (){
    console.log('ss');

  }
  get name() { return this.register.get('name'); }
  get email() { return this.register.get('email'); }
  get password_repet() { return this.register.get('email'); }

  get password() { return this.register.get('password'); }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.register.value);
  }

}
