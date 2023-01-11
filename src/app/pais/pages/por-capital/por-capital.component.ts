import { Component} from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styleUrls: ['./por-capital.component.css']
})
export class PorCapitalComponent{

  public termino: string = '';
  public ocurrioError: boolean = false;
  public countries: Country[] = [];
  public _placeholder : string = "Buscar por capital"

  constructor(private paisService: PaisService) {}

  buscar(termino: string) {
    this.ocurrioError = false;
    this.paisService
      .buscarPaisPorCapital(termino)
      .subscribe({
        next: (response) => {
          this.countries = response;
        },
        error: (error) =>{
          this.termino = termino;
          this.ocurrioError = true;
        },
      });
  }
  
  sugerencias(event : string){}
}
