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

  constructor(private paisService: PaisService) {}

  buscar(termino: string) {
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
}