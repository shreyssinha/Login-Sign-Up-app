import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import firebase from "firebase/compat/app"
import { AngularFireAuth } from "@angular/fire/compat/auth";

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss']
})
export class EmailComponent implements OnInit {

  state: string = '';
  error: any;
  email: string = '';
  password: string = '';

  constructor(
    public afAuth: AngularFireAuth, 
    private router: Router) {

      this.afAuth.authState.subscribe( auth => {

        if (auth) {
          this.router.navigateByUrl('/members');
        }
      });
  }

  onSubmit(formData: any) {
    if (formData.valid) {
      console.log(formData.value);
      this.afAuth.signInWithEmailAndPassword(formData.value.email, formData.value.password)
      .then(
        (success) => {
          console.log(success);
          this.router.navigate(['/members'])
        }).catch(
          (err) => {
            console.log(err);
            this.error = err;
          });
    }
  }

  ngOnInit(): void {
  }

}
