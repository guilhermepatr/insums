import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { CustomValidators } from './custom-validators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule]
})
export class RegisterComponent implements OnInit {
  registroForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

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
      console.log(this.registroForm.value);
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
    }
    
    // Verifica erros no nível do formulário para as senhas
    if (field === 'confirmSenha' && this.registroForm.errors?.['senhasDiferentes']) {
      return 'As senhas não coincidem';
    }
    return '';
  }
}