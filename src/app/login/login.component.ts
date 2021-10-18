import { Component, OnInit, HostBinding } from '@angular/core';
import { Router } from '@angular/router';
import firebase from "firebase/compat/app"
import '@firebase/auth'
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { SocialAuthService, FacebookLoginProvider, SocialUser } from 'angularx-social-login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  error: any;

  constructor(
    public afAuth: AngularFireAuth, 
    private router: Router,
    private socialAuthService: SocialAuthService) {

      this.afAuth.authState.subscribe( auth => {

        if (auth) {
          this.router.navigateByUrl('/members');
        }
      });
  }

  loginFacebook() {
    firebase.auth().signInWithPopup( new firebase.auth.FacebookAuthProvider() )
    .then(
      (success) => {
        console.log("Going to members");
        this.router.navigate(['./members']);
      }).catch(
        (err) => {
          this.error = err;
          console.log(this.error);
        }
      )
  }

  loginFb() {
    this.socialAuthService.signIn(FacebookLoginProvider.PROVIDER_ID)
    .then(
      (success) => {
        console.log("Going to members");
        this.router.navigate(['./members']);
      }).catch(
        (err) => {
          this.error = err;
          console.log(this.error);
        }
    )
  }

  loginGoogle() {
    firebase.auth().signInWithPopup( new firebase.auth.GoogleAuthProvider() )
    .then(
      (success) => {
        console.log("Going to members");
        this.router.navigate(['./members']);
      }).catch(
        (err) => {
          this.error = err;
        }
      )
  }


  ngOnInit() { }

}
