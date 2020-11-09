import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DataService } from '../Services/data.service';




@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  formularioForm: FormGroup;

  constructor(
   
      private dataService:DataService,
     
  ) {
     
     this.formularioForm= new FormGroup({
      
      titulo:new FormControl(),
      texto:new FormControl(),
      autor:new FormControl(),
      imagen:new FormControl(),
      fecha:new FormControl(),
      categoria:new FormControl(),


     });

    
   }

  ngOnInit(): void {
  }

   async onSubmit() {
    // Datos del formulario
    // console.log(this.formularioForm.value);
     await this.dataService.agregarPost(this.formularioForm.value);
    
    }

    
}



