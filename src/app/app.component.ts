import { Component , Input } from '@angular/core';
import { FormArray, FormControl, FormGroup} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import {FormularioComponent} from './formulario/formulario.component';






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
 constructor( public dialog:  MatDialog ){

}


 openDialog(): void {
  const dialogRef = this.dialog.open( FormularioComponent, {
    width: '250px',
   
  
});

  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed');
  
  });
}
}