import { AbstractControl, ValidationErrors } from '@angular/forms';

export class CustomValidators {
  static senhaForte(control: AbstractControl): ValidationErrors | null {
    const senha = control.value;
    const temMaiuscula = /[A-Z]/.test(senha);
    const temMinuscula = /[a-z]/.test(senha);
    const temNumero = /[0-9]/.test(senha);
    
    return temMaiuscula && temMinuscula && temNumero ? 
      null : { senhaFraca: true };
  }

  static senhasIguais(control: AbstractControl): ValidationErrors | null {
    const senha = control.get('senha');
    const confirmacao = control.get('confirmSenha');
    
    return senha && confirmacao && senha.value === confirmacao.value ?
      null : { senhasDiferentes: true };
  }

  static maiorIdade(control: AbstractControl): ValidationErrors | null {
    const data = new Date(control.value);
    const hoje = new Date();
    const idade = hoje.getFullYear() - data.getFullYear();
    
    return idade >= 18 ? null : { menorIdade: true };
  }
}