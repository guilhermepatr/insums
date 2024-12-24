import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/users';

  constructor(private http: HttpClient) {}
  // Salvar usuário
  registerUser(user: any): Observable<any> {
    return this.http.post(this.apiUrl, user);
  }

  // Verificar login
  loginUser(email: string, senha: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}?email=${email}&senha=${senha}`);
  }
}


