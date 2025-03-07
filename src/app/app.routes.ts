import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DocenteComponent } from './pages/docente/docente.component';
import { EstudianteComponent } from './pages/estudiante/estudiante.component';
import { LoginComponent } from './pages/login/login.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { FormularioRegistroComponent } from './components/formulario-registro/formulario-registro.component';
import { loginGuard } from './guards/login.guard';

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'docente',
    component: DocenteComponent, canActivate: [loginGuard]
  },
  {
    path: 'estudiante',
    component: EstudianteComponent, canActivate: [loginGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'nosotros',
    component: NosotrosComponent
  },
  {
    path: 'registro',
    component: FormularioRegistroComponent
  }
];
