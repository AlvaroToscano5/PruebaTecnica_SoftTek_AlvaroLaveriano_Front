import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { ILogin } from '../models/ILogin';
import { Observable } from 'rxjs';
import { IVentas } from '../models/IVentas';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private token!: string;
  private URL = 'https://localhost:44376'

  constructor(private http: HttpClient) { }

  Login(user: ILogin){
    return this.http.post('/api/login/authenticate', user)
  }

  GetVentas() : Observable<IVentas[]>{
    console.log(this.getToken())

    let httpHeaders = new HttpHeaders().set("Authorization", "Bearer " + this.getToken())
    
    console.log('Bearer ' + this.getToken())

    return this.http.get<IVentas[]>('/api/customers', { headers: httpHeaders })
  }

  private getToken(): string{
    if(!this.token){
      this.token = sessionStorage.getItem("ACCESS_TOKEN")!
    }

      return this.token
  }
}
