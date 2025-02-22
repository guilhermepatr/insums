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
    imports: [RouterOutlet, FooterComponent, HeaderComponent, MainComponent, LoginComponent, RegisterComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'insums';

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
