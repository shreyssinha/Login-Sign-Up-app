import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { CanActivate, Router } from '@angular/router';
import { map, tap } from 'rxjs/operators';
import 'rxjs';
import firebase from "firebase/compat";

@Injectable()

export class AuthService {

  constructor(
    public afAuth: AngularFireAuth,
    private router: Router
  ) { }

  canActivate(): Observable<boolean> {
    return of(this.afAuth).pipe(
      map(state => !!state),
      tap(authenticated => {
        if (!authenticated) this.router.navigate([ '/login' ]);
        else this.router.navigate(['/members']);
      })
    );
  }

}
