import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-docente',
  standalone: true,
  imports: [],
  templateUrl: './docente.component.html',
  styleUrl: './docente.component.css'
})
export class DocenteComponent {

  constructor(private router: Router) { }

  // Función para cerrar sesión
  logout(): void {
    // Eliminar el token de localStorage
    localStorage.removeItem('login');

    // Redirigir al usuario a la página de inicio de sesión
    this.router.navigate(['login']);
  }
}
