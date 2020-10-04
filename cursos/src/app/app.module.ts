import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListCursosComponent } from './list-cursos/list-cursos.component';
import { ListProfessoresComponent } from './list-professores/list-professores.component';

@NgModule({
  declarations: [
    AppComponent,
    ListCursosComponent,
    ListProfessoresComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
