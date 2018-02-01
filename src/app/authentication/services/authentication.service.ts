import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Router } from '@angular/router';


@Injectable()
export class AuthenticationService {

    token: string;
    constructor(private router: Router) {

    }

    signupUser(email: string, password: string) {
        firebase.auth().createUserWithEmailAndPassword(email, password).then(
            () => {
                this.router.navigate(['/signin']);
            }
        )
            .catch(
            err => console.log(err)
            )
    }

    signInUser(email: string, password: string) {
        firebase.auth().signInWithEmailAndPassword(email, password).then(
            (response) => {
                firebase.auth().currentUser.getToken().then(
                    (token: string) => {
                        this.token = token;
                        this.router.navigate(['/catalog-movies/list']);
                    }
                )
            }
        ).catch(
            (err) => console.log(err)
            )
    }

    getToken() {
        firebase.auth().currentUser.getToken().then(
            (token: string) => {
                this.token = token;
            }
        );
        return this.token;
    }
}