import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CreateReservationRequest } from '../model/create-reservation-request.model';

@Injectable({
  providedIn: 'root'
})
export class ReservationRequestService {

  apiHost: string = 'http://localhost:8080/api/';
  headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }

    findAllByAccommodation(accommodationId: number) : Observable<any>{
        return this.http.get<any>(this.apiHost + 'reservation/' + accommodationId, {headers: this.headers})
    }

    changeRequestStatus(requestId : number, status : string) : Observable<any>{
        return this.http.put<any>(this.apiHost + 'reservation/' + requestId, status, {headers: this.headers})
    }

    createReservation(dto : CreateReservationRequest): Observable<any> {
        return this.http.post<any>(this.apiHost + 'reservation', dto, {headers: this.headers});
    }

    getAllRequestsByUser(userId : number) : Observable<any>{
        return this.http.get<any>(this.apiHost + 'reservation/getByUserId/' + userId, {headers: this.headers})
    }

//   searchAccommodation(location: string, numOfGuests: number, startDate: string, endDate: string): Observable<any>{
//     return this.http.get<any>(this.apiHost + 'accommodation' , {params: new HttpParams().set('location', location).set('numOfGuests', numOfGuests).set('startDate', startDate)
//       .set('endDate', endDate)})
//   }

//   findAll(): Observable<any>{
//     return this.http.get<any>(this.apiHost + 'accommodation/findAll', {headers: this.headers})
//   }

//   findById(accommodationId: number) : Observable<any>{
//     return this.http.get<any>(this.apiHost + 'accommodation/findById', {params: new HttpParams().set('id', accommodationId)})
//   }

}