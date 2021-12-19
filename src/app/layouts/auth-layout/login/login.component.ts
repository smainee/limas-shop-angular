import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public userForm = new FormGroup ({
    email: new FormControl(null, [Validators.required]),
    password: new FormControl(null,[
      Validators.required,
      Validators.minLength(6),
      Validators.pattern("^(?=.*[!@#$%^&*]+)[a-z0-9!@#$%^&*]{6,32}$")
    ])
  })
  
  get email(){
    return this.userForm.get('email');
  }
  get password(){
    return this.userForm.get('password');
  }

  get u(){
    return this.userForm.controls;
  }
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  public goToSignup() {
    this.router.navigate(['/auth/signup'])
  }
}
