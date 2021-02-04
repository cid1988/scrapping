import { Component, OnInit } from '@angular/core';
import { ServiciosService } from './services/servicios.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'scrapping';

  direcciones = []

  constructor(private servicio: ServiciosService) {
    this.getFravega();
  }

  ngOnInit() {

  }

  getFravega() {
    this.servicio.getFravega().subscribe(fravega => {
      console.log(fravega)
      this.direcciones = fravega;
    })
  }
}
