import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  constructor(public toastController: ToastController) { }

  async showMessage(mess: string, time: number = 2000){
    const toast = await this.toastController.create({
      message: mess,
      duration: time,
      showCloseButton: true,
      position: 'middle',
      translucent: true,
    });
    toast.present();
  }

  async showSuccessMessage(mess: string, time: number = 2000){
    const toast = await this.toastController.create({
      message: mess,
      duration: time,
      showCloseButton: true,
      position: 'middle',
      translucent: true,
      color: 'success'
    });
    toast.present();
  }

}
