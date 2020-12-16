import { HttpClient } from '@angular/common/http';
import { EventEmitter } from '@angular/core';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Cep } from '../components/cep/cep';
@Injectable({
  providedIn: 'root'
})
export class CepService {

  mostrarMenuCEP = new EventEmitter<boolean>();

  constructor(private http: HttpClient, private router: Router) { }

  getCep(cep: Cep){
    this.http.get<Cep>('https://cep.awesomeapi.com.br/json/' + cep.cep).subscribe(
      obj => {
        console.log('consulta do CEP com sucesso');
        this.mostrarMenuCEP.emit(true);
      },
      error => {
        console.log('erro na consulta do CEP');
      }
    );
  }
}
