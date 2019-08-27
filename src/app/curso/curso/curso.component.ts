import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {

  curso: any =
  {
    nome: null,
    descricao: null,
    email: null
  }

  constructor() { }

  ngOnInit() {
  }

  onSubmit(formulario: NgForm)
  {
    if(formulario.valid)
    {
      console.log(formulario);
      console.log('----- Valores do formulario');
      console.log(formulario.form.value);
      console.log('----- Valores do objeto');
      console.log(this.curso);
    }
  }
}
