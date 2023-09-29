import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { LoginPage } from '../login/login.page';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  constructor(public modalCtrl: ModalController) { }

  ngOnInit() {
    this.presentLoginModal(); 
  }

  async presentLoginModal() {
    const modal = await this.modalCtrl.create({
      component: LoginPage,
    });
    await modal.present();
  }

}
