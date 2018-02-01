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
      <div class="rightActions" style="right: 18px;position: absolute;top: 4px;">
        <button mat-button mat-icon-button>
          <i class="material-icons">open_in_browser</i>
        </button>
        <button mat-button mat-icon-button>
          <i class="material-icons">open_in_new</i>
        </button>
        <button mat-button mat-icon-button>
          <i class="material-icons">open_with</i>
        </button>
        <button mat-button mat-icon-button>
          <i class="material-icons">settings</i>
        </button>
      </div>
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
    <mat-card-actions>
      <button type="submit" mat-button mat-raised-button color="primary" [disabled]='!f.valid'>SIGN UP</button>
      <button type="button" mat-button mat-raised-button color="warn" routerLink="/..">SIGN IN</button>
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
