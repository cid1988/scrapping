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
    return this.http.get<[]>('http://localhost:3000/api/fravega');
  }
}
