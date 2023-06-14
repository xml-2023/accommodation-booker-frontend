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

  findHostRatingsByGuestId(guestId: number) : Observable<any>{
    return this.http.get<any>(this.apiHost + 'rating/hostGrade/findByUserId', {params: new HttpParams().set('id', guestId)})
  }

  findHostRatingsByHostId(hostId: number) : Observable<any>{
    return this.http.get<any>(this.apiHost + 'rating/hostGrade/findByHostId', {params: new HttpParams().set('id', hostId)})
  }

  findAccommodationRatingsByGuestId(guestId: number) : Observable<any>{
    return this.http.get<any>(this.apiHost + 'rating/findByUserId', {params: new HttpParams().set('id', guestId)})
  }

  findAccommodationRatingsByAccommodationId(accommodationId: number) : Observable<any>{
    return this.http.get<any>(this.apiHost + 'rating/findByAccommodationId', {params: new HttpParams().set('id', accommodationId)})
  }

  editAccommodationGrade(updateAccommodationGradeRequest: any): Observable<any> {
    return this.http.put<any>(this.apiHost + 'rating', updateAccommodationGradeRequest, {headers: this.headers});
  }

  editHostGrade(updateHostGradeRequest: any): Observable<any> {
    return this.http.put<any>(this.apiHost + 'rating/hostGrade', updateHostGradeRequest, {headers: this.headers});
  }

  deleteAccommodationGrade(accommodationGradeId: any): Observable<any> {
    return this.http.delete<any>(this.apiHost + 'rating', {params: new HttpParams().set('id', accommodationGradeId)});
  }

  deleteHostGrade(hostGradeId: any): Observable<any> {
    return this.http.delete<any>(this.apiHost + 'rating/hostGrade', {params: new HttpParams().set('id', hostGradeId)});
  }

}