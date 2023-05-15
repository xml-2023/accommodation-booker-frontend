import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CreateAccount } from '../model/create-account.model';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  apiHost: string = 'http://localhost:8080/api/';
  headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
  });

  constructor(private http: HttpClient) {}

  createHostAccount(account: CreateAccount): Observable<any> {
    return this.http.post<any>(this.apiHost + 'account/host', account, {
      headers: this.headers,
    });
  }

  createGuestAccount(account: CreateAccount): Observable<any> {
    return this.http.post<any>(this.apiHost + 'account/guest', account, {
      headers: this.headers,
    });
  }
}
