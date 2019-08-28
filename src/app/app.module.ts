import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CursoComponent } from './curso/curso/curso.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AlunoComponent } from './aluno/aluno/aluno.component';

@NgModule({
  declarations: [
    AppComponent,
    CursoComponent,
    AlunoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
