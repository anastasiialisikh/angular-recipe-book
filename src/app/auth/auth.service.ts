import * as firebase from 'firebase';

export class AuthService {
  token: string;

  async signupUser(email: string, password: string) {
    try {
      await firebase.auth().createUserWithEmailAndPassword(email, password);
      this.token = await firebase.auth().currentUser.getIdToken();
    } catch (error) {
      console.log(error);
    }
  }

  async signinUser(email: string, password: string) {
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      this.token = await firebase.auth().currentUser.getIdToken();
    } catch (error) {
      console.log(error);
    }
  }

  getToken() {
    return this.token;
  }
}
