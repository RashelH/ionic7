import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LugaresService } from 'src/services/lugares.service';

@Component({
  selector: 'app-addlugar',
  templateUrl: './addlugar.page.html',
  styleUrls: ['./addlugar.page.scss'],
})
export class AddlugarPage implements OnInit {
  lugar: any = {};
  editar: boolean = false; 

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public lugaresService: LugaresService
  ) {}

  guardarLugar() {
    if (this.lugar.id) {
      this.lugaresService.updateLugar(this.lugar, this.lugar.id);
    } else {
      this.lugar.createdAt = Date.now();
      this.lugaresService.createLugar(this.lugar);
    }

    this.router.navigate(['/tabs']);
  }

  ngOnInit() {
    const lugarId = this.route.snapshot.paramMap.get('id');
    this.editar = this.route.snapshot.queryParamMap.get('editar') === 'true';

    if (lugarId) {
      this.lugaresService.getLugar(lugarId).subscribe((lugar) => {
        this.lugar = lugar;
        this.lugar.id = lugarId;
      });
    }
  }
}
