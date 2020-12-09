import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/components/cep/user';
import { CepService } from 'src/app/service/cep.service';

@Component({
  selector: 'app-cepsearch',
  templateUrl: './cepsearch.component.html',
  styleUrls: ['./cepsearch.component.css']
})
export class CepsearchComponent implements OnInit {

  constructor(private cepService: CepService ) { }

  ngOnInit(): void {
    this.callUser()
  }
  
  user:User;

  callUser(){
    this.cepService.getUser().subscribe(obj => this.user = obj);

  }

}
