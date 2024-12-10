// Importando os módulos necessários
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // IMPORTANTE: IMPORTAR O FormsModule

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component'; // IMPORTANDO O MainComponent

@NgModule({
  declarations: [
    AppComponent,
    MainComponent, // Declarando o MainComponent
  ],
  imports: [
    BrowserModule, // Necessário para aplicações no navegador
    FormsModule, // Necessário para usar ngModel (Two-Way Data Binding)
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
