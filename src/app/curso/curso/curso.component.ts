import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CursoserviceService } from '../cursoservice.service'
import { Curso } from './Curso'

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {

  curso: Curso = new Curso();

  constructor(private cursoService: CursoserviceService) { }

  ngOnInit() {
  }

  onSubmit(formulario: NgForm)
  {
    if(formulario.valid)
    {
      /*
      console.log(formulario);
      console.log('----- Valores do formulario');
      console.log(formulario.form.value);
      console.log('----- Valores do objeto');
      console.log(this.curso);
      */
      this.cursoService.cadastraCurso(this.curso);
      this.curso = new Curso();
      
    }
  }
}
