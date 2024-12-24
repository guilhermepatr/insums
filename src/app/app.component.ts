import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './pags/login/login.component';
import { MainComponent } from './main/main.component';
import { RegisterComponent } from './pags/register/register.component';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FooterComponent, HeaderComponent,MainComponent, LoginComponent, RegisterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'insums';

  loggedInUserName: string | null = null; // Nome do usuário logado

  onUserLoggedIn(userName: string): void {
    this.loggedInUserName = userName; // Atualiza o nome do usuário logado
  }
}
