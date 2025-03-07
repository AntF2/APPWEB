import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {

  autenticacion():boolean{
    if(typeof window!=='undefined' && window.localStorage){
      return localStorage.getItem('login')==='true';
  }
    return false;
  }
}
