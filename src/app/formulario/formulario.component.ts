import { Component, OnInit, Input } from '@angular/core';
import { MatDialogRef} from '@angular/material/dialog'

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {



  constructor( 
    private dialogRef: MatDialogRef<FormularioComponent>,
  
  ) { }

  ngOnInit(): void {
  }

  x(): void {
    this.dialogRef.close();
  }

}
