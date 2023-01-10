import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styleUrls: ['./pais-input.component.css']
})
export class PaisInputComponent{
  @Output() onEnterTermino : EventEmitter<string> = new EventEmitter();

  public termino: string = '';
 
  buscar() {
    this.onEnterTermino.emit(this.termino);
  }

}
