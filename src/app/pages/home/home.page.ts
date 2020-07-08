import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { ExtensionService } from '../../utils/extension/extension.service'

import { AuthenticationService } from 'src/app/utils/auth/authentication.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public items: Array<any>;
  public imgs: Array<any>;
  public _toastCtrl: ToastController;
  public theDataBook: Array<any>;
  myTest: {};

  constructor(private storage: Storage, private extension: ExtensionService, private authService: AuthenticationService) {

    this.ionViewDidLoad();
    this.imgItems();

    const user = {
      username: 'Ivan',
      password: '1234'
    }

    // mengatur key/value
    this.storage.set('name', user);
    console.log('values array : ', user.username);

    // mengambil key/value
    this.storage.get('name').then((val) => {
      console.log('Your name is', val.password);
      if (val.password != null) {
      }
    });
  }
  id: string;
  volumeInfo: { title: string; subtitle: string; authors: string[]; publisher: string; publishDate: string; description: string; averageRating: number; ratingsCount: number; imageLinks: { thumbnail: string; smallThumbnail: string; }; };

  ionViewDidLoad() {
    this.items = [
      { title: 'Notatka 1', description: 'Opis notatki 1' },
      { title: 'Notatka 2', description: 'Opis notatki 2' },
      { title: 'Notatka 3', description: 'Opis notatki 3' }
    ];
  }

  imgItems() {
    this.imgs = [
      {
        img: ('../../../assets//img//bannerTest.jpg')
      },
      {
        img: ('../../../assets//img//bannerTest.jpg')
      },
      {
        img: ('../../../assets//img//bannerTest.jpg')
      }
    ]
  }

  showView() {
    this.extension.navigateCtrl('testing-view');
  }

  async showToast() {
    this.extension.showToast('Clicked by my extension')
  }

  showDataBook() {
    console.log(this.theDataBook);
  }

  logoutUser() {
    this.authService.logout();
  }
}
