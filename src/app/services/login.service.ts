import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private API_URL = 'http://localhost:3000/login'; // Asegúrate de que esta URL sea correcta.

  constructor(private http: HttpClient) {}

  // Verificar si el usuario existe y comparar la contraseña
  postLogin(usuario: any): Observable<any> {
    return this.http.post<any>(this.API_URL, usuario);
  }

  // Aquí podrías agregar el método de registro si fuera necesario
  postRegistro(usuario: any): Observable<any> {
    return this.http.post<any>('http://localhost:3000/register', usuario); // URL de registro
  }
}
