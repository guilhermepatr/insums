import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router'; // Adicione esta importação
import { CustomValidators } from './custom-validators';
import { UserService } from '../../user-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule]
})
export class RegisterComponent implements OnInit {
  registroForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private userService: UserService, // Adicione o serviço
    private router: Router // Adicione o router
  ) {}

  ngOnInit() {
    this.registroForm = this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(2)]],
      sobrenome: ['', [Validators.required, Validators.minLength(2)]],
      dateNascimento: ['', [Validators.required, CustomValidators.maiorIdade]],
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [
        Validators.required,
        Validators.minLength(8),
        CustomValidators.senhaForte
      ]],
      confirmSenha: ['', [Validators.required]]
    }, {
      validators: CustomValidators.senhasIguais
    });
  }

  onSubmit() {
    if (this.registroForm.valid) {
      // Remover confirmSenha antes de enviar
      const userData = {...this.registroForm.value};
      delete userData.confirmSenha;

      console.log('Enviando dados:', userData); // Debug

      this.userService.registerUser(userData).subscribe({
        next: (response) => {
          console.log('Resposta do servidor:', response); // Debug
          alert('Usuário registrado com sucesso!');
          this.router.navigate(['/login']);
        },
        error: (error) => {
          console.error('Erro no registro:', error);
          alert('Erro ao registrar usuário. Tente novamente.');
        }
      });
    } else {
      console.log('Formulário inválido:', this.registroForm.errors); // Debug
    }
  }


  getErrorMessage(field: string): string {
    const control = this.registroForm.get(field);
    if (control?.errors && control.touched) {
      if (control.errors['required']) return 'Campo obrigatório';
      if (control.errors['email']) return 'Email inválido';
      if (control.errors['minlength']) return 'Tamanho mínimo não atingido';
      if (control.errors['senhaFraca']) return 'A senha deve conter letras maiúsculas, minúsculas e números';
      if (control.errors['menorIdade']) return 'Você deve ter mais de 18 anos';
      if (control.errors['senhasDiferentes']) return 'As senhas não coincidem';
    }
    return '';
  }
}