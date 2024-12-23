import { Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './pags/login/login.component';
import { MainComponent } from './main/main.component';
import { RegisterComponent } from './pags/register/register.component';
import { ReactiveFormsModule } from '@angular/forms';

export const routes: Routes = [
    //{ path: '', redirectTo: 'main', pathMatch: 'full' }, // Exemplo de redirecionamento para a página inicial
    { path: 'login', component: LoginComponent }, // Rota para o componente de login
    { path: 'register', component: RegisterComponent}, //Rota para o componente de registro
    //{ path: 'main', component: MainComponent}
];
