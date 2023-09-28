import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Platform, ToastController } from '@ionic/angular';


declare global {
  interface Navigator {
    app: {
      exitApp(): void;
    };
  }
}


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  valor = "";
  showAlert = false;
  backButtonClicks = 0; 

  constructor(
    private router: Router,
    private platform: Platform,
    private toastController: ToastController
  ) {
    this.setupBackButtonListener();
  }

  pushLugar() {
    this.router.navigate(['/lugar', { id: this.valor }]);
  }

  private setupBackButtonListener() {
    this.platform.backButton.subscribeWithPriority(0, () => {
      this.backButtonClicks++; 

      if (this.backButtonClicks === 1) {
        console.log("Primer clic en el botón de retroceso");
        this.presentToast();

      } else if (this.backButtonClicks === 2) {
        console.log("Segundo clic en el botón de retroceso");
        this.presentToast();
       navigator['app'].exitApp(); 
      }
    });
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Cerrando aplicación',
      duration: 3000,
      position: 'bottom' 
    });
    toast.present();
  }
}