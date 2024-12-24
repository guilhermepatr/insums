import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../user-service.service';
import { User } from '../../user-service.service';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule,CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  loginForm!: FormGroup;

  @Output() userLoggedIn = new EventEmitter<string>();

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router,
    
  ) {}

  login(email: string, password: string): void {
    this.userService.loginUser(email, password).subscribe(user => {
      if (user) {
        console.log('Login bem-sucedido:', user);
        this.userLoggedIn.emit(user.nome); // Emite o nome do usuário
      } else {
        console.warn('Falha no login');
      }
    });
  }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const { email, senha } = this.loginForm.value;

      this.userService.loginUser(email, senha).subscribe({
        next: (user) => {
          if (user) {
            alert('Login realizado com sucesso!');
            this.router.navigate(['/main']); // Redireciona para a página principal
          } else {
            alert('Credenciais inválidas. Tente novamente.');
          }
        },
        error: (error) => {
          console.error('Erro no login:', error);
          alert('Ocorreu um erro ao tentar fazer login. Tente novamente.');
        }
      });
    } else {
      alert('Por favor, preencha os campos corretamente.');
    }
  }
}
