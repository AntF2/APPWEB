import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private API_URL = 'http://localhost:3000/login'; // Asegúrate de que esta URL sea correcta.
  private API_REGISTER = 'http://localhost:3000/register'; // URL de registro

  constructor(private http: HttpClient) {}

  // Verificar si el usuario existe y comparar la contraseña
  postLogin(usuario: any): Observable<any> {
    return this.http.post<any>(this.API_URL, usuario).pipe(
      catchError(this.handleError) // Agregamos un manejador de errores
    );
  }

  // Método para registrar un nuevo usuario
  postRegistro(usuario: any): Observable<any> {
    return this.http.post<any>(this.API_REGISTER, usuario).pipe(
      catchError(this.handleError) // Agregamos un manejador de errores
    );
  }

  // Manejador de errores
  private handleError(error: any): Observable<any> {
    console.error('Ocurrió un error:', error);
    return new Observable(); // O puedes devolver un Observable con un mensaje de error adecuado.
  }
}
