import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IVentas } from 'src/app/models/IVentas';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.css']
})
export class VentasComponent implements OnInit {
  ventas! : IVentas[];

  constructor(
    private authService: AuthService
  ){
  }

  ngOnInit(): void{
    this.authService.GetVentas().subscribe(
      data => {
        console.log(data)
        this.ventas = data;
      }
    )
  }
}
