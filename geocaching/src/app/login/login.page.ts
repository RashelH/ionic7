import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { AuthService } from 'src/services/auth.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    public modalCtrl: ModalController,
    private router: Router,
    public authService: AuthService,
    private afAuth: AngularFireAuth
  ) { }

  ngOnInit() {
  }

  async loginFacebook() {
    try {
      const response = await this.authService.loginWithFacebook();
      alert('Logeado con éxito');
      this.modalCtrl.dismiss();
      localStorage.setItem('loginData', JSON.stringify(response));
    } catch (error) {
    }
  }

  async cancelar() {
    await this.modalCtrl.dismiss();
  }
}
