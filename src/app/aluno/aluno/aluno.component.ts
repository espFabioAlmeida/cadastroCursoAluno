import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Aluno } from './Aluno'

@Component({
  selector: 'app-aluno',
  templateUrl: './aluno.component.html',
  styleUrls: ['./aluno.component.css']
})
export class AlunoComponent implements OnInit 
{
  aluno: Aluno = new Aluno();
  

  constructor() { }

  ngOnInit() 
  {
    this.aluno.sexo = 'Masculino';
    this.aluno.descontoExAluno = false;
    this.aluno.descontoPromocional = false;
    this.aluno.descontoTrabalhadorIndustrial = false;
  }

  onSubmit(formulario: NgForm)
  {
    if(formulario.valid)
    {

      console.log(formulario);
      console.log('----- Valores do formulario');
      console.log(formulario.form.value);
      console.log('----- Valores do objeto');
      console.log(this.aluno);

      this.aluno = new Aluno();
      this.aluno.sexo = 'Masculino';
      this.aluno.descontoExAluno = false;
      this.aluno.descontoPromocional = false;
      this.aluno.descontoTrabalhadorIndustrial = false;

      /*this.cursoService.cadastraCurso(this.curso);
      this.curso = new Curso();
      this.cursos = this.cursoService.getCursos();
      console.log(this.cursos);*/
    }
  }

}
