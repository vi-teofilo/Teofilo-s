import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CepService } from 'src/app/service/cep.service';
import { User } from 'src/app/components/cep/user';


@Component({
  selector: 'app-cep',
  templateUrl: './cep.component.html',
  styleUrls: ['./cep.component.css']
})
export class CepComponent implements OnInit {

  constructor(private cepService: CepService ) { }

  ngOnInit(): void {
    this.callUser()
  }
  
  user:User;

  callUser(){
    this.cepService.getUser().subscribe(obj => this.user = obj);

  }
}
