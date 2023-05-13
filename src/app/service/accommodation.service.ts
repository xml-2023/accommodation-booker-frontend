import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccommodationService {

  apiHost: string = 'http://localhost:8080/api/';
  headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }

  createAccommodation(accommodation: any): Observable<any> {
    return this.http.post<any>(this.apiHost + 'accommodation', accommodation, {headers: this.headers});
  }

  searchAccommodation(location: string, numOfGuests: number, startDate: string, endDate: string): Observable<any>{
    return this.http.get<any>(this.apiHost + 'accommodation' , {params: new HttpParams().set('location', location).set('numOfGuests', numOfGuests).set('startDate', startDate)
      .set('endDate', endDate)})
  }

  findAll(): Observable<any>{
    return this.http.get<any>(this.apiHost + 'accommodation/findAll', {headers: this.headers})
  }

}