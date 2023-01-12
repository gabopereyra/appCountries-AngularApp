import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css'],
})
export class PorPaisComponent {
  public termino: string = '';
  public ocurrioError: boolean = false;
  public countries: Country[] = [];
  public paisesSugeridos: Country[] = [];
  public _placeholder : string = "Buscar por pais";
  public mostrarSugerencias : boolean = false;

  constructor(private paisService: PaisService) {}

  buscar(termino: string) {
    this.mostrarSugerencias = false;
    this.ocurrioError = false;
    this.paisService
      .buscarPais(termino)
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
  
  sugerencias(termino : string){
    this.ocurrioError = false;
    this.mostrarSugerencias = true;
    this.termino = termino;

    this.paisService
      .buscarPais(termino)
      .subscribe({
        next: (response) => {
          this.paisesSugeridos = response;
        },
        error: (e) =>{
          this.paisesSugeridos = [];
        },
      });
  }


  buscarSugerido(termino : string){
    this.buscar(termino);
  }
}