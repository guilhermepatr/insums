import { MainComponent } from './main/main.component';
import { RegisterComponent } from './pags/register/register.component';
import { PhonePipe } from './pipes/phone.pipe';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './pags/login/login.component';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterModule,
    CommonModule,
    FooterComponent,
    HeaderComponent,
    HttpClientModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'insums';
  telefone = '41987654321';
  loggedInUserName: string | null = null;

  handleUserLogin(userName: string) {
    this.loggedInUserName = userName;
  }
  
  onActivate(event: any) {
    if (event instanceof LoginComponent) {
      event.userLogin.subscribe((userName: string) => {
        this.loggedInUserName = userName;
      });
    }
  }
}