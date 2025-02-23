import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { CommonModule } from '@angular/common';
import { map } from 'rxjs/operators';
import { firstValueFrom } from 'rxjs';

export interface User {
  id?: number;
  nome: string;
  sobrenome: string;
  dateNascimento: string;
  email: string;
  senha: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:3000/users';
  private currentUserSubject = new BehaviorSubject<User | null>(null);
  currentUser$ = this.currentUserSubject.asObservable();

  constructor(private http: HttpClient) {
    console.log('UserService initialized'); // Debug
  }

  registerUser(user: User): Observable<User> {
    console.log('Tentando registrar usuário:', user); // Debug
    return this.http.post<User>(this.apiUrl, user).pipe(
      tap(newUser => {
        console.log('Usuário registrado:', newUser); // Debug
        this.currentUserSubject.next(newUser);
      }),
      catchError(error => {
        console.error('Erro no serviço:', error);
        throw error;
      })
    );
  }

  getCurrentUser(): User | null {
    return this.currentUserSubject.value;
  }

  loginUser(email: string, senha: string): Promise<User | null> {
    const url = `${this.apiUrl}?email=${email}&senha=${senha}`;
    return firstValueFrom(
      this.http.get<User[]>(url).pipe(
        map(users => (users.length > 0 ? users[0] : null)),
        tap(user => {
          if (user) {
            console.log('Usuário autenticado:', user);
          } else {
            console.warn('Credenciais inválidas.');
          }
        }),
        catchError(error => {
          console.error('Erro ao validar login:', error);
          throw error;
        })
      )
    );
  }
}

/*
  loginUser(email: string, senha: string): Observable<User | null> {
    const url = `${this.apiUrl}?email=${email}&senha=${senha}`;
    return this.http.get<User[]>(url).pipe(
      map(users => (users.length > 0 ? users[0] : null)), // Retorna o primeiro usuário se encontrado
      tap(user => {
        if (user) {
          console.log('Usuário autenticado:', user);
        } else {
          console.warn('Credenciais inválidas.');
        }
      }),
      catchError(error => {
        console.error('Erro ao validar login:', error);
        throw error;
      })
    );
  }*/
