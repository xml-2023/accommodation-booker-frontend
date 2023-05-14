import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  apiHost: string = 'http://localhost:8080/api/';
  headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
  });

  constructor(private http: HttpClient) {}

  createAccount(account: any): Observable<any> {
    return this.http.post<any>(this.apiHost + 'account', account, {
      headers: this.headers,
    });
  }
}
