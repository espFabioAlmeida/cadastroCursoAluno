import { Injectable } from '@angular/core';
import { Curso } from './curso/Curso';

@Injectable({
  providedIn: 'root'
})
export class CursoserviceService {

  cursos: Curso[] = [];

  constructor() { }

  cadastraCurso(curso: Curso)
  {
    console.log("Recebido no service");
    console.log(curso);
    this.cursos.push(curso);
    console.log(this.cursos);
  }

}
