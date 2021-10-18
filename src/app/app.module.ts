import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { HttpModule } from '@angular/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { EmailComponent } from './email/email.component';
import { SignupComponent } from './signup/signup.component';
import { MembersComponent } from './members/members.component';
import { FormsModule } from '@angular/forms';
import { AuthService } from './auth.service';
import { routes } from './app.routes';
import { FacebookLoginProvider, SocialLoginModule, SocialAuthServiceConfig } from 'angularx-social-login';
import { HashLocationStrategy, LocationStrategy  } from '@angular/common';

export const firebaseConfig = {
  apiKey: "AIzaSyCzZtOKNBsfFllb0zcEfY95VYMw204OXaY",
  authDomain: "firestore-64697.firebaseapp.com",
  projectId: "firestore-64697",
  databaseURL: "https://firestore-64697-default-rtdb.firebaseio.com",
  storageBucket: "firestore-64697.appspot.com",
  messagingSenderId: "467771728068",
  appId: "1:467771728068:web:66185607387d011b60a991",
  measurementId: "G-1DQ91MPGLM"
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EmailComponent,
    SignupComponent,
    MembersComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    FormsModule,
    routes,
    SocialLoginModule
  ],
  providers: [
    AuthService,
    {provide : LocationStrategy , useClass: HashLocationStrategy},
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider(
              '266004255442151'
            )
          }
        ]
      } as SocialAuthServiceConfig,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
