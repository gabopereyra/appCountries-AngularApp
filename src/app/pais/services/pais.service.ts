import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/country.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private _url : string = "https://restcountries.com/v3.1";

  get httpParams(){
    return new HttpParams()
      .append('fields', 'name')
      .append('fields', 'population')
      .append('fields', 'cca2')
      .append('fields', 'flags');
  }

  constructor(private httpClient : HttpClient) {}

  buscarPais(termino: string) : Observable<Country []>{
      const url = `${this._url}/name/${termino}`;

    return this.httpClient.get<Country []>(url, {params : this.httpParams});
  }

  buscarPaisPorCapital(termino: string) : Observable<Country []>{
    const url = `${this._url}/capital/${termino}`;

    return this.httpClient.get<Country []>(url, {params : this.httpParams});
  }

  getPaisPorCodigo(termino: string) : Observable<Country>{
    const url = `${this._url}/alpha?codes=${termino}`;

    return this.httpClient.get<Country>(url);
  }

  buscarPaisPorRegion(termino: string) : Observable<Country []>{
    const url = `${this._url}/region/${termino}`;

    return this.httpClient.get<Country []>(url, {params : this.httpParams});
  }

}
