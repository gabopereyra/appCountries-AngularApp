import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { Country } from '../../interfaces/country.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styleUrls: ['./ver-pais.component.css']
})
export class VerPaisComponent implements OnInit {
  public pais! : Country;

  public translations! : String [];

  constructor(
    private activatedRoute : ActivatedRoute,
    private paisService : PaisService
    ) { }

  ngOnInit(): void {
  //   this.activatedRoute.params
  //   .subscribe( ({id}) => {
  //     this.paisService.getPaisPorCodigo(id)
  //     .subscribe({
  //       next: (response) => {
  //         console.log(response);
  //       },
  //       error: (error) => console.log("No se ha podido obtener la informacion")
  //     });
  //   });    
  // }

  this.activatedRoute.params
    .pipe(
      switchMap( ({id}) => this.paisService.getPaisPorCodigo(id) ),
      tap(console.log) 
    )
    .subscribe({
      next: (response) => { 
        this.pais = response[0]
        this.translations = response[0].translations
      },
      error: (error) => console.log("No se ha podido obtener la informacion")
    });
  
  }

}