import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CepService } from 'src/app/service/cep.service';
import { User } from 'src/app/components/cep/user';
import { FormGroup, FormBuilder, Validators, ValidationErrors } from '@angular/forms';


@Component({
  selector: 'app-cep',
  templateUrl: './cep.component.html',
  styleUrls: ['./cep.component.css']
})
export class CepComponent implements OnInit {

  loginForm: FormGroup;
  submit: boolean;

  constructor(private cepService: CepService,private fb: FormBuilder) { }

  ngOnInit(): void {
    
    this.submit = false;

    this.loginForm = this.fb.group({
      'cep': [''],
    });
  }
  

  autenticarCep(){
    if (this.loginForm.valid) {
      this.submit = false;
      this.cepService.getUser(this.loginForm.value);
    } else {
      this.submit = true;
    }
  }
}
