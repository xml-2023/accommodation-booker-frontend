import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CreateHostRating } from '../model/create-host-rating.model';

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

  createHostRating(hostGrade: CreateHostRating): Observable<any> {
    return this.http.post<any>(this.apiHost + 'rating/hostGrade', hostGrade, {headers: this.headers});
  }
}