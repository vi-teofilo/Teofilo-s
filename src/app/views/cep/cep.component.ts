import { Component, OnInit } from '@angular/core';
import { CepService } from 'src/app/service/cep.service';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
@Component({
  selector: 'app-cep',
  templateUrl: './cep.component.html',
  styleUrls: ['./cep.component.css']
})
export class CepComponent implements OnInit {

  cepForm: FormGroup;
  submit: boolean;
  showCep: boolean;

  constructor(private cepService: CepService,private fb: FormBuilder) { }

  ngOnInit(): void {

    this.submit = false;

    this.cepForm = this.fb.group({
      'cep': ['', [Validators.required, Validators.minLength(8)]]
    });
  }
  
  consultarCep(){
    if (this.cepForm.valid) {

      this.submit = false;

      this.cepService.getCep(this.cepForm.value);

      this.exibirCep()

    } else {
      this.submit = true;
    }
  }

  exibirCep(){
    if (this.cepService.mostrarMenuCEP)
    {
      this.showCep = true;
    }
    else {
      console.log('derrota na exibição do CEP')
    }
  }
}
