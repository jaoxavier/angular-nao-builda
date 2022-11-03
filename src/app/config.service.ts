import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Carro } from './model/Carro';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  url = 'http://localhost:8080/api/carros'

  constructor(
    private http: HttpClient
  ) { }

  getData(){
    return this.http.get<Carro>(this.url).subscribe((res) => {
      console.log(res);
    });
  }

}
