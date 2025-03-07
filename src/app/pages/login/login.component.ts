import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor (private sercivio: LoginService, private route: Router) {}



  email: any;
  password: any;

  login(loginForm: any) {
    console.log(loginForm.value);
    this.sercivio.postLogin(loginForm.value).subscribe(acceso=>{
      console.log(acceso);
      let token = acceso.accesstoken
      if(token! = ''){
      localStorage.setItem("login", "true")
      this.route.navigate(['private']);
      }
    });
  }

  /*ngOnInit() {
    this.sercivio.getLogin().subscribe()
  }*/


}
