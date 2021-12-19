import { Component, OnInit } from '@angular/core'
import {
  AbstractControl,
  AbstractControlOptions,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms'
import { Router } from '@angular/router'
import { MustMatch } from 'app/helpers/must-match.validator'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  // public userForm = new FormGroup ({
  //   email: new FormControl(null, [Validators.required]),
  //   password: new FormControl(null,[
  //     Validators.required,
  //     Validators.minLength(6),
  //     Validators.pattern('^(?=.*[!@#$%^&*]+)[a-z0-9!@#$%^&*]{6,32}$')
  //   ]),
  //   confirmPassword: new FormControl(null, [Validators.required, MustMatch('password', 'confirmPassword')]),
  // })
  userForm!: FormGroup
  
  constructor(private router: Router, private fb: FormBuilder) {}

  ngOnInit(): void {
    
    const formOptions: AbstractControlOptions = { validators: MustMatch('password', 'confirmPassword') };
    this.userForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.pattern('^(?=.*[!@#$%^&*]+)[a-z0-9!@#$%^&*]{6,32}$'),
        ],
      ],
      confirmPassword: ['', [Validators.required]]
    }, formOptions)
    console.log(this.userForm.controls);
  }

  get email() {
    return this.userForm.get('email')
  }
  get password() {
    return this.userForm.get('password')
  }

  get confirmPassword() {
    return this.userForm.get('confirmPassword')
  }

  get u() {
    return this.userForm.controls
  }

  public goToLogin() {
    this.router.navigate(['/auth/login'])
  }
}
