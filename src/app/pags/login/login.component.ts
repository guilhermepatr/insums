import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../user-service.service';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule, CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  @Output() userLoggedIn = new EventEmitter<string>();
  @Output() userLogin = new EventEmitter<string>();

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router,
  ) {}

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
            alert(`Seja bem-vindo ${user.nome}!`);
            this.userLogin.emit(user.nome);
            this.router.navigate(['/main']);
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