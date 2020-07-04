import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public items: Array<any>;
  public imgs: Array<any>;
  public _toastCtrl: ToastController;

  constructor(private toastCtrl: ToastController, private storage: Storage) {
    this._toastCtrl = toastCtrl;
    this.ionViewDidLoad();
    this.imgItems();

    // mengatur key/value
    this.storage.set('name', 'Ivan Suhendra');
    // mengambil key/value
    this.storage.get('name').then((val) => {
      console.log('Your name is', val);
    });
  }

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
        img: ('../../../assets//imgs//bannerTest.jpg')
      },
      {
        img: ('../../../assets//imgs//bannerTest.jpg')
      },
      {
        img: ('../../../assets//imgs//bannerTest.jpg')
      }
    ]
  }

  async viewItem(item: any) {

    const toast = await this._toastCtrl.create({
      message: 'My item is a ' + item,
      duration: 2000,
      position: item,

    });
    toast.present();
  }

  async showToast(msg) {
    let toast = await this.toastCtrl.create({
      message: msg,
      position: 'top',
      duration: 2000
    });
    toast.present();
  }
}
