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
    private dataService: DataService
  ) {

     this.formularioForm= new FormGroup({

      title:new FormControl(),
      text:new FormControl(),
      author:new FormControl(),
      image:new FormControl(),
      date:new FormControl(),
      category:new FormControl(),


     })
   }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.formularioForm.value)
  }

}
