import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'formulario-reativo';

  Dados: FormGroup = new FormGroup( {  

  nome: new FormControl(''),
  sobrenome: new FormControl(''),
  username : new FormControl(''),
  cpf: new FormControl(''),
  telefone: new FormControl(''),
  endereco:  new FormControl(''),
  complemento:new FormControl(''),
  senha0: new FormControl(''),
  senha1: new FormControl(''),
}) 
  cel: FormArray  = new FormArray([
    new FormControl(''),
    new FormControl('')
  ])

 constructor(){}
}


