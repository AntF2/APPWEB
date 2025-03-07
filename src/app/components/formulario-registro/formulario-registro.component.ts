import { Component } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-formulario-registro',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './formulario-registro.component.html',
  styleUrls: ['./formulario-registro.component.css']
})
export class FormularioRegistroComponent {
  constructor(private servicio: LoginService, private route: Router) {}

  // Variables para los datos del formulario
  email: any;
  password: any;
  nombre: any;
  confirmPassword: any;

  // Método para registrar al usuario
  register(registroForm: any): void {
    console.log(registroForm.value);

    // Llamamos al método postRegistro() para enviar los datos a la API
    this.servicio.postRegistro(registroForm.value).subscribe(
      (response) => {
        console.log('Registro exitoso', response);
        let token = response.accesstoken; // Suponiendo que la respuesta tenga un token de acceso

        if (token !== '') {
          // Guardamos el estado de login en localStorage
          localStorage.setItem('login', 'true');
          // Redirigimos a una página después de registrarse
          this.route.navigate(['docente']);
        }
      },
      (error) => {
        console.error('Error en el registro', error);
      }
    );
  }


}
