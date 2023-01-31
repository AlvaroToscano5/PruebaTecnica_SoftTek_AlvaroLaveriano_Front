import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ILogin } from 'src/app/models/ILogin';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  formLogin: FormGroup;
  private token!: string;
  
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ){  
    this.formLogin = formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  ngOnInit(){

  }

  ngOnLogin(){
    console.log("Entro al Metodo")

    const userLogin: ILogin = {
      username: this.formLogin.value.username,
      password: this.formLogin.value.password
    }

    console.log(userLogin)

    this.authService.Login(userLogin).subscribe(
      res => {
        console.log(res)
        this.saveToken(res.toString(), "30")
        this.router.navigate(['/ventas'])
      })
  }
  
  private saveToken(token: string, expireIn: string): void {
    sessionStorage.setItem("ACCESS_TOKEN", token)
    sessionStorage.setItem("EXPIRES_IN", expireIn)
    this.token = token;
  }

  private getToken(): string{
    if(!this.token){
      this.token = sessionStorage.getItem("ACCESS_TOKEN")!
    }

      return this.token
  }
}
