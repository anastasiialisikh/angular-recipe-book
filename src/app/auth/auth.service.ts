import * as firebase from 'firebase';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  token: string;

  constructor(
    private router: Router
  ) {}

  async signupUser(email: string, password: string) {
    try {
      await firebase.auth().createUserWithEmailAndPassword(email, password);
      this.token = await firebase.auth().currentUser.getIdToken();
      this.router.navigate(['/']);
    } catch (error) {
      console.log(error);
    }
  }

  async signinUser(email: string, password: string) {
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      this.token = await firebase.auth().currentUser.getIdToken();
      this.router.navigate(['/']);
    } catch (error) {
      console.log(error);
    }
  }

  logoutUser() {
    firebase.auth().signOut();
    this.token = null;
  }

  getToken(): string {
    return this.token;
  }

  isAuthenticated(): boolean {
    return !!this.token;
  }
}
