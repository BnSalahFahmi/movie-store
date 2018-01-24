import { NgModule } from '@angular/core';
import { AuthRootComponent } from './components/auth-root/auth-root.component';
import { AuthenticationService } from './services/authentication.service';
import { authenticationRoutingModule } from './auth-routing.module';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';

@NgModule({
  declarations: [
      AuthRootComponent, 
      SigninComponent, 
      SignupComponent
    ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    authenticationRoutingModule,
    SharedModule
  ],
  exports:[
    authenticationRoutingModule
  ],
  providers:[
      AuthenticationService
  ]
})
export class AuthenticationModule{

}