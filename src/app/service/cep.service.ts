import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { User } from '../components/cep/user';
import { UtilsService } from './utils.service';

@Injectable({
  providedIn: 'root'
})
export class CepService {

  constructor(private http: HttpClient,private utils: UtilsService) { }

  getUser(): Observable<User>{
    return this.http
    .get<User[]>('https://cep.awesomeapi.com.br/json/03375000')
    .pipe(retry(1), catchError(this.utils.handleError));
   }
}
