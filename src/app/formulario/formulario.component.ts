import { Component, OnInit, Input } from '@angular/core';
import { MatDialogRef} from '@angular/material/dialog'

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  
    nome:string=''
    sobrenome:string=''
    username:string=''
    cpf:string=''
    telefone:string=''
    endereco:string=''

  
  constructor( 
    private dialogRef: MatDialogRef<FormularioComponent>,
  
  ) { }

  ngOnInit(): void {
  }

 

}
