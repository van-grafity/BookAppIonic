import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { Platform, ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  authState = new BehaviorSubject(false);

  constructor(private router: Router, private storage: Storage, private platforn: Platform, private toastController: ToastController) {
    this.platforn.ready().then(() => {
      this.ifLoggedIn();
    })
  }

  ifLoggedIn() {
    this.storage.get('USER_INFO').then((response: Response) => {
      if (response) {
        this.authState.next(true);
      }
    })
  }

  login() {
    var dummy_response = {
      user_name: 'Ivan',
      user_password: '1234'
    };
    this.storage.set('USER_INFO', dummy_response).then((response: Response) => {
      this.router.navigate(['home']);
      this.authState.next(true);
    })
  }

  logout() {
    this.storage.remove('USER_INFO').then((response: Response) => {
      this.router.navigate(['login']);
      this.authState.next(false);
    })
  }

  isAuthenticated() {
    return this.authState.value;
  }
}
