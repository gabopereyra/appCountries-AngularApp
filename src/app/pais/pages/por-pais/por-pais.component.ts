import { Component} from '@angular/core';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css']
})
export class PorPaisComponent{

  public termino : string = '';
  public ocurrioError : boolean = false;

  constructor(
    private paisService : PaisService,
  ) { }

  buscar(){
    this.ocurrioError = false;
    this.paisService.buscarPais(this.termino)
      .subscribe(
        { 
          next: (v) => this.ocurrioError = false,
          error: (e) => {this.ocurrioError = true},
        }
      );
  }
}

