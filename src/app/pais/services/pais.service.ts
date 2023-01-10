import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/country.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private _url : string = "https://restcountries.com/v3.1";

  constructor(private httpClient : HttpClient) {}

  buscarPais(termino: string) : Observable<Country []>{
    const url = `${this._url}/name/${termino}`;

    return this.httpClient.get<Country []>(url);
  }
}
