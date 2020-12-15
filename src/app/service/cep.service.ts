import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, retry } from 'rxjs/operators';
import { Cep } from '../components/cep/cep';
import { UtilsService } from './utils.service';

@Injectable({
  providedIn: 'root'
})
export class CepService {

  constructor(private http: HttpClient,private utils: UtilsService) { }

  getCep(cep: Cep){
    return this.http
    .get<Cep>('https://cep.awesomeapi.com.br/json/'+ cep.cep)
    .pipe(retry(1), catchError(this.utils.handleError));
   }
}
