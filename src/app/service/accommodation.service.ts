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

  findById(accommodationId: number) : Observable<any>{
    return this.http.get<any>(this.apiHost + 'accommodation/findById', {params: new HttpParams().set('id', accommodationId)})
  }

  findByName(accommodationName: string) : Observable<any>{
    return this.http.get<any>(this.apiHost + 'accommodation/findByName', {params: new HttpParams().set('name', accommodationName)})
  }

  findByHostId(hostId: number) : Observable<any> {
    return this.http.get<any>(this.apiHost + 'accommodation/' + hostId, {headers: this.headers})
  }

}