import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-lugar',
  templateUrl: './lugar.page.html',
  styleUrls: ['./lugar.page.scss'],
})
export class LugarPage implements OnInit {

  argumento = null;

  constructor(public navCtrl: NavController,
              private route: ActivatedRoute,
      ) { }

      navigateBack(){
        this.navCtrl.pop();
      }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.argumento = params['id'];
    });
  }

}
