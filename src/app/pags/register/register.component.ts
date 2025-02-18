import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomValidators } from './custom-validators';
import { UserService } from '../../user-service.service';
import { PhonePipe } from '../../pipes/phone.pipe'; // Importando o Pipe

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, PhonePipe] // Importando o Pipe no componente
})
export class RegisterComponent implements OnInit {
  registroForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit() {
    this.registroForm = this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(2)]],
      sobrenome: ['', [Validators.required, Validators.minLength(2)]],
      dateNascimento: ['', [Validators.required, CustomValidators.maiorIdade]],
      email: ['', [Validators.required, Validators.email]],
      telefone: ['', [Validators.required, Validators.pattern(/^\d{10,11}$/)]], // Validação para 10 ou 11 dígitos
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
      const userData = { ...this.registroForm.value };
      delete userData.confirmSenha; // Removendo confirmação de senha antes de enviar
  
      console.log('Enviando dados:', userData); // Debug
  
      this.userService.registerUser(userData).subscribe({
        next: (response) => {
          console.log('Resposta do servidor:', response);
          alert('Usuário registrado com sucesso!');
          this.router.navigate(['/login']);
        },
        error: (error) => {
          console.error('Erro no registro:', error);
          alert('Erro ao registrar usuário. Tente novamente.');
        }
      });
    } else {
      console.log('Formulário inválido:', this.registroForm.errors);
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
      if (control.errors['pattern']) return 'Telefone inválido. Use apenas números com DDD';
    }
    return '';
  }
}
