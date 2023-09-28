import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tercera',
  templateUrl: './tercera.page.html',
  styleUrls: ['./tercera.page.scss'],
})
export class TerceraPage implements OnInit {

  constructor(public navCtrl: NavController) { }

  navigateBack(){
    this.navCtrl.pop();
  }

  ngOnInit() {
  }

}
