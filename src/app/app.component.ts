import { Component , Input } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import {FormularioComponent} from './formulario/formulario.component';






@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'formulario-reativo';


Dados: FormGroup = this.fb.group({
  nome:['',[Validators.required, Validators.minLength(2)]],
  sobrenome:['' ,[Validators.required, Validators.minLength(3)]],
  username:['' ,[Validators.required, Validators.minLength(2)]],
  cpf:['' ,[Validators.required, Validators.minLength(2)] ], 
  telefone:['' ,[Validators.required, Validators.minLength(2)]] ,
  endereco:['',[Validators.required, Validators.minLength(2)]],
  complemento:['' ,[Validators.required, Validators.minLength(2)]],
  senha0:['' ,[Validators.required, Validators.minLength(8)]],
  senha1:['' ,[Validators.required, Validators.minLength(8)]]
   
  
},
)


 constructor(
    public dialog:  MatDialog,
    private fb :FormBuilder          
   ){

}


 openDialog(): void {
  let ref  = this.dialog.open( FormularioComponent);

  ref.componentInstance.nome = this.Dados.value
  ref.componentInstance.sobrenome = this.Dados.value
  ref.componentInstance.username = this.Dados.value
  ref.componentInstance.cpf = this.Dados.value
  ref.componentInstance.telefone = this.Dados.value
  ref.componentInstance.endereco = this.Dados.value
 

  
 }

}
  


