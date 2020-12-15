import { Component, OnInit } from '@angular/core';
import { Cep } from 'src/app/components/cep/cep';
import { CepService } from 'src/app/service/cep.service';

@Component({
  selector: 'app-cepsearch',
  templateUrl: './cepsearch.component.html',
  styleUrls: ['./cepsearch.component.css']
})
export class CepsearchComponent implements OnInit {

  constructor(private cepService: CepService ) { }

  ngOnInit(): void {
    //this.callUser()
  }
  
  cep:Cep;

  // callUser(){
  //   this.cepService.getCep().subscribe(obj => this.cep = obj);

  // }

}
