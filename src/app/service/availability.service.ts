import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AvailabilityService {

  apiHost: string = 'http://localhost:8080/api/';
  headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }

  createAvailability(availability: any): Observable<any> {
    return this.http.post<any>(this.apiHost + 'accommodation/availability', availability, {headers: this.headers});
  }


  findAll(): Observable<any>{
    return this.http.get<any>(this.apiHost + 'accommodation/availability/findAll', {headers: this.headers})
  }

  findById(availabilityId: number) : Observable<any>{
    return this.http.get<any>(this.apiHost + 'accommodation/availability/findById', {params: new HttpParams().set('id', availabilityId)})
  }

  editAvailability(availability: any): Observable<any> {
    return this.http.put<any>(this.apiHost + 'accommodation/availability', availability, {headers: this.headers});
  }

}