import { Component, Input, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-pais-tabla',
  templateUrl: './pais-tabla.component.html',
  styleUrls: ['./pais-tabla.component.css']
})
export class PaisTablaComponent implements OnInit {
  @Input() public countries: Country[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
