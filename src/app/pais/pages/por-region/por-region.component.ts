import { Component} from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styleUrls: ['./por-region.component.css']
})
export class PorRegionComponent {

  public regiones : string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];

  public regionActiva : string = '';

  public countries : Country[] = [];

  constructor(
    private paisService : PaisService
  ) { }

  activarRegion(region : string){
    if( this.regionActiva == region ){
      return;
    }
    this.countries = []

    this.regionActiva = region;

    this.paisService.buscarPaisPorRegion(region)
    .subscribe({
      next: (response) => {
        this.countries = response;
      },
      error: (error) =>{
       console.log("Ha ocurrido un error al recuperar los paises");
      },
    });
  }
  

}
