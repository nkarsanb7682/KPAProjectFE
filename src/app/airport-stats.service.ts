import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AirportVM } from './models/AirportVM';

@Injectable({
  providedIn: 'root'
})
export class AirportStatsService {

  constructor(private http: HttpClient) { }

  public getData(): Observable<AirportVM[]> {
    return this.http.get<AirportVM[]>("http://localhost:5238/api/airlines/getAirportData")
  }
}
