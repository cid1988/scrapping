import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {

  httpHeaders = new HttpHeaders({
    'Content-Type' : 'application/x-www-form-urlencoded;',
    'Cache-Control': 'no-cache'
  });

  constructor(private http: HttpClient) { }

  getFravega():Observable<[]> {
    // return this.http.get<[]>('https://scrapping-shops-backend.herokuapp.com/api/fravega');
    // return this.http.get<[]>('http://localhost:3000/api/fravega');

    let headers = new HttpHeaders();
    return this.http.get<[]>('http://localhost:3000/api/fravega', { headers })
  }
}
