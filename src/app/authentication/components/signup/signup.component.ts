import {Component, OnInit} from '@angular/core';
import {FormControl, Validators, NgForm} from '@angular/forms';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-signup',
  template: `
  <mat-card class="example-card signup-card">
  <form (ngSubmit)="onSignUp(f)" #f="ngForm">
    <mat-card-header>
      <mat-card-title>Authentication </mat-card-title>
    </mat-card-header>
    <mat-card-content>
      <mat-form-field>
        <mat-label>Email</mat-label>
        <input matInput name="email" placeholder="Enter your email" required ngModel>
        <mat-error *ngIf="email.invalid">{{getErrorMessage()}}</mat-error>
      </mat-form-field>
      <mat-form-field>
        <mat-label>Password</mat-label>
        <input matInput type="password" name="password" placeholder="Tape your password" required ngModel #password="ngModel">
        <mat-error *ngIf="password.invalid">The password is mandatory</mat-error>
      </mat-form-field>
    </mat-card-content>
    <mat-card-actions align="end">
      <button type="submit" mat-stroked-button color="primary">SIGN UP</button>
      <button type="button" mat-stroked-button color="warn" routerLink="/..">SIGN IN</button>
    </mat-card-actions>
    </form>
  </mat-card>
  `,
  styles: [`
  mat-form-field{
    width: 49%;
}
.signup-card {
    width: 54%;
    margin: 15px;
    position: absolute;
    left: 20%;
    top: 25%;
  }
  
  .example-header-image {
    background-image: url('https://material.angular.io/assets/img/examples/shiba1.jpg');
    background-size: cover;
  }

  .mat-button.mat-icon-button{
      line-height: 0px;
      min-width: 10px;
      padding: 0px;
      width: 30px;
      height: 30px;
      border-radius: 0px;
  }
  .mat-card-content, .mat-card-header .mat-card-title, .mat-card-subtitle {
    font-size: 16px;
   }

   mat-form-field {
     margin: 0px 2px !important;
   }

   mat-card-actions {
    margin-right: 10px;
  }

   mat-card-actions button {
    width: 120px;
    outline: none;
  }
   
  `]
})
export class SignupComponent implements OnInit {

  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit() {
  }

  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email' :
            '';
  }

  onSignUp(form: NgForm){
    let value = form.value;
    this.authenticationService.signupUser(value.email, value.password);
  }

}
