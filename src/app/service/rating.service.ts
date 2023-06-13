import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RatingService {

  apiHost: string = 'http://localhost:8080/api/';
  headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }

  createAccommodationRating(accommodationGrade: any): Observable<any> {
    return this.http.post<any>(this.apiHost + 'rating', accommodationGrade, {headers: this.headers});
  }
}