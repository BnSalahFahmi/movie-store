import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthRootComponent } from './components/auth-root/auth-root.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';

const appRoutes: Routes = [
        { path: '', component: SigninComponent },
        { path: 'signup', component: SignupComponent, pathMatch:'full'},
]

@NgModule({
    imports: [ RouterModule.forChild(appRoutes) ],
    exports: [RouterModule]
})
export class authenticationRoutingModule{

}