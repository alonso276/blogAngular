import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,Validators } from '@angular/forms';
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
      
      titulo:new FormControl('',[Validators.required
      ]),
      texto:new FormControl('',[Validators.required
      ]),
      autor:new FormControl('',[Validators.required
      ]),
      imagen:new FormControl('',[Validators.required
      ]),
      fecha:new FormControl('',[Validators.required
      ]),
      categoria:new FormControl('',[Validators.required
      ]),


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



