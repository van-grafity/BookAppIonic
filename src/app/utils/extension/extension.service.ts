import { Injectable } from '@angular/core';
import { ToastController, NavController, Platform } from '@ionic/angular';
import { Storage } from '@ionic/storage'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { File } from '@ionic-native/file/ngx';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';

@Injectable({
  providedIn: 'root'
})
export class ExtensionService {

  constructor(
    public toastCtrl: ToastController,
    public navCtrl: NavController,
    public storage: Storage,
    public httpClient: HttpClient,
    public androidPermissions: AndroidPermissions,
    public plt: Platform,
    public file: File) { }

  async showToast(msg) {
    let toast = await this.toastCtrl.create({
      message: msg,
      position: 'top',
      duration: 2000
    });
    toast.present();
  }

  navigateCtrl(toPath) {
    this.navCtrl.navigateForward(toPath);
  }

  setKeyValueStorage() {
    // Set key/value
    this.storage.set('name', 'Ivan Suhendra');
  }

  getKeyValueStorage() {
    // Get key/value
    this.storage.get('name').then((val) => {
      console.log('Your name is', val);
    });
  }

  getSimpleDataApi(users: Observable<any>) {
    users = this.httpClient.get('https://randomuser.me/api/?results=20')
      .pipe(map(res => res['results']))

    console.log("my", users)
  }

  // Put to Main Entry Point to add permission device
  permissionAndroid() {
    this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.CAMERA).then(
      result => console.log('Has permission?', result.hasPermission),
      err => this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.CAMERA)
    );

    this.androidPermissions.requestPermissions([
      this.androidPermissions.PERMISSION.CAMERA,
      this.androidPermissions.PERMISSION.CALL_PHONE,
      this.androidPermissions.PERMISSION.GET_ACCOUNTS,
      this.androidPermissions.PERMISSION.READ_EXTERNAL_STORAGE,
      this.androidPermissions.PERMISSION.WRITE_EXTERNAL_STORAGE]);
  }

  detectedDevice(blob: Blob, stringToInsert: string) {
    this.plt.ready().then(() => {
      if (this.plt.is('android')) {
        this.file.checkDir(this.file.dataDirectory, 'IvanDir').then(response =>
          console.log('Directory exists' + response))
          .catch(err => this.file.createDir(this.file.dataDirectory, 'IvanDir', false).then(response => {
            this.file.createFile(this.file.dataDirectory, 'Ivan.txt', true);
            stringToInsert = 'I learned this from Medium';
            blob = new Blob([stringToInsert], { type: 'text/plain' });

            this.file.writeFile(this.file.dataDirectory, 'IvanDir', blob, { replace: true, append: false }).then(result => {
              console.log('Text Success' + response)
            }).catch(err => {
              console.log('Text Success' + response)
            });

            this.file.readAsText(this.file.dataDirectory, 'IvanDir');
            console.log('Directory create' + response)
          }).catch(err =>
            console.log('Directory no create' + JSON.stringify(err))))
      }
    })
  }
}
