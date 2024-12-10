import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
})
export class MainComponent {
  // Variável para armazenar o nome do usuário
  userName: string = '';

  // Método que será chamado quando o botão for clicado
  onSubmit(): void {
    // Exibindo o alerta com a interpolação do nome
    alert(`Olá, ${this.userName}! Você apertou o botão.`);
  }
}
