import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import firebase from "firebase/compat/app"
import { AngularFireAuth } from "@angular/fire/compat/auth";

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss']
})
export class MembersComponent implements OnInit {

  name: any;
  state: string = '';

  constructor(
    public afAuth: AngularFireAuth, 
    private router: Router) {

      this.afAuth.authState.subscribe( auth => {

        if (auth) {
          this.name = auth.displayName;
        }
      });
  }

  logout() {
    this.afAuth.signOut();
    console.log('logged out');
    this.router.navigateByUrl('/login');
  }

  ngOnInit(): void {
  }

}
