import { Component } from '@angular/core';
import { IonRouterOutlet, MenuController, ModalController } from '@ionic/angular';
import { ModalComponent } from '../shared/components/modal/modal.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    private routerOutlet: IonRouterOutlet,
    private modalController: ModalController) { }

  create() {
    this.presentModal();
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: ModalComponent,
      showBackdrop: true,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }
}
