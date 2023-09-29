import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LugaresService } from 'src/services/lugares.service';
import { NavController } from '@ionic/angular';
import { Platform } from '@ionic/angular';


@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {

  lugares: Array<any> = [ ];

  constructor( private router: Router,
                private route: ActivatedRoute,
                private lugaresService: LugaresService,
                private navCtrl: NavController,
                private platform: Platform,
                ) { 
                  this.platform.backButton.subscribeWithPriority(10, () => {
                    this.navigateBackToHome();
                  });
                }

                navigateBackToHome() {
                  
                  this.router.navigate(['/home']);
                }

  irAVistaDeDetalle(){
    this.router.navigate(['/addlugar' ]);
    //alert('Estoy funcionando')
  }
  irAVistaDeDetalleExistente(){
    this.router.navigate(['/addlugar' ]);
  }
  
  ngOnInit() {

    this.lugaresService.getLugares().subscribe(res => {
      this.lugares = res;
    });  
  }

  remove(lugar: any) {
    this.lugaresService.removeLugar(lugar.id);
  }
  
  
  editarLugar(lugarId: string) {
    this.router.navigate(['/addlugar', lugarId], { queryParams: { editar: true } });
  }
  
  eliminarLugar(lugarId: string) {
    this.lugaresService.removeLugar(lugarId);
  }
  navigateBack() {
    this.navCtrl.back();
      }
}
