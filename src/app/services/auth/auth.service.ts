import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { getAuth, User, updateProfile, onAuthStateChanged } from 'firebase/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public userr: User;
  public isUserLogged: Observable<any>;

  constructor(private aFirebaseAuth: AngularFireAuth) {
  }

  public async registerUser(email: string, password: string) {
    try {
      return await this.aFirebaseAuth.createUserWithEmailAndPassword(email, password);
    } catch (err) {
      console.log('error al registrar nuevo usuario:', err);
      return null;
    }
  }

  public async loginUser(email: string, password: string) {
    try {
      return await this.aFirebaseAuth.signInWithEmailAndPassword(email, password);
    } catch (err) {
      console.log('Error al iniciar sesión: ', err);
      return null;
    }
  }

  public async updateUserProfileName(name: string, user: User) {
    await updateProfile(user, { displayName: name });
  }

  public isUserLoggedIn() {
    this.isUserLogged = this.aFirebaseAuth.authState;
    return null;
  }

  public asd() {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      this.userr = user;
      console.log('userino', this.userr);
    });
    return this.userr;
  }

  public logoutUser() {
    this.aFirebaseAuth.signOut();
  }
}
