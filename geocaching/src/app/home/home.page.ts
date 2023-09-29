import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Platform, ToastController } from '@ionic/angular';
import { interval, Subscription } from 'rxjs';

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
  backButtonClicks = 0;
  private backButtonSubscription!: Subscription;
  private resetTimeout: any; 

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
    this.backButtonSubscription = this.platform.backButton.subscribeWithPriority(
      0,
      () => {
        this.backButtonClicks++;

        if (this.backButtonClicks === 1) {
          console.log("Primer clic en el botón de retroceso");
          this.presentToast();


          this.resetTimeout = setTimeout(() => {
            this.backButtonClicks = 0; 
          }, 3000);
        } else if (this.backButtonClicks === 2) {
          console.log("Segundo clic en el botón de retroceso");
          this.presentToast();
          navigator['app'].exitApp();
        }
      }
    );
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Cerrando aplicación',
      duration: 1000,
      position: 'bottom'
    });
    toast.present();
  }

  ngOnDestroy() {
    this.backButtonSubscription.unsubscribe();


    if (this.resetTimeout) {
      clearTimeout(this.resetTimeout);
    }
  }
}
