import { Component, OnInit } from '@angular/core';
import { updateProfile } from '@firebase/auth';
import { Observable } from 'rxjs';
import { REGISTER_BUTTON_CONSTANT, SIGNIN_BUTTON_CONSTANT } from 'src/app/common/constants/button.constants';
import { INPUT_CONSTANTS_DESCRIPTIONS } from 'src/app/common/constants/input.constants';
import { IButton } from 'src/app/common/interfaces/button.interface';
import { IInput, IInputDescription } from 'src/app/common/interfaces/input.interface';
import { IUser } from 'src/app/common/interfaces/user.interface';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public user: IUser;
  public newUser: IUser;
  public loginEmailInput: IInputDescription;
  public loginPasswordInput: IInputDescription;
  public newUserNameInput: IInputDescription;
  public newUserEmailInput: IInputDescription;
  public newUserPasswordInput: IInputDescription;
  public signInButtonDescription: IButton;
  public registerButtonDescription: IButton;

  constructor(public authService: AuthService) {
    this.user = {
      email: '',
      password: '',
      name: ''
    };
    this.newUser = {
      email: '',
      password: '',
      name: ''
    };
    this.loginEmailInput = INPUT_CONSTANTS_DESCRIPTIONS.email;
    this.loginPasswordInput = INPUT_CONSTANTS_DESCRIPTIONS.password;
    this.newUserNameInput = INPUT_CONSTANTS_DESCRIPTIONS.newUserName;
    this.newUserEmailInput = INPUT_CONSTANTS_DESCRIPTIONS.newUserEmail;
    this.newUserPasswordInput = INPUT_CONSTANTS_DESCRIPTIONS.newUserPassword;
    this.signInButtonDescription = SIGNIN_BUTTON_CONSTANT;
    this.registerButtonDescription = REGISTER_BUTTON_CONSTANT;
  }

  ngOnInit() {
  }

  public signIn() {
    const {email, password} = this.user;
    this.authService.loginUser(email, password).then(user => {
      console.log('Usuario loggeado !');
      if(!user){
        console.log('credenciales erróneas !!');
        return null;
      }
    }).catch(err => {
      console.log(err);
    });
  }

  public async registerNewUser() {
    const {email, password, name} = this.newUser;
    await this.authService.registerUser(email, password).then(user =>{
      console.log('Nuevo usuario registrado ! Bienvenido: ', user);
    }).catch(err => {
      console.log('error ! : ', err);
    });
    await this.authService.logoutUser();
    await this.authService.loginUser(email, password);
    updateProfile(this.authService.userr, {displayName: name});
  }
}
