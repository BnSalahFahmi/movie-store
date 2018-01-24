import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  template: `
  <mat-card class="example-card login-card">
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
        <mat-label>Login</mat-label>
        <input matInput placeholder="Tape your login" required>
      </mat-form-field>
      <mat-form-field>
        <mat-label>Password</mat-label>
        <input matInput placeholder="Tape your password" required>
      </mat-form-field>
    </mat-card-content>
    <mat-card-actions>
      <button mat-button mat-raised-button color="primary">LOGIN</button>
      <button mat-button mat-raised-button color="warn">SUBSCRIBE</button>
    </mat-card-actions>
  </mat-card>
  `,
  styles: [`
  mat-form-field{
    width: 49%;
}
.login-card {
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

  constructor() { }

  ngOnInit() {
  }

}
