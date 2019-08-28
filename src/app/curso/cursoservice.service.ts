import { Injectable } from '@angular/core';
import { Curso } from './curso/Curso';

@Injectable({
  providedIn: 'root'
})
export class CursoserviceService {

  cursos: Curso[] = [];
  nomeCursos: String[] = [];
  descricaoCursos: String[] = [];
  emailCursos: String[] = [];

  constructor() { }

  cadastraCurso(curso: Curso)
  {
    console.log("Recebido no service");
    console.log(curso);
    this.cursos.push(curso);
    console.log(this.cursos);
  }

  getCursos()
  {   
    return this.cursos;
  }

}
