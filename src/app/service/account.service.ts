import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { CreateAccount } from '../model/create-account.model';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  apiHost: string = 'http://localhost:8080/api/';
  headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
  });

  private access_token: string | null = localStorage.getItem('jwt');
  private loggedIn: boolean = !!this.access_token;
  currentUser: any =
    JSON.parse(localStorage.getItem('loggedUser') as string) || null;
  private role: string = localStorage.getItem('role') || '';

  constructor(private http: HttpClient) {}

  getDistinguishedHostStatus(id : any) : Observable<any>{
    return this.http.get<any>(this.apiHost + 'account/distinguishedHost/' + id, {
      headers : this.headers})
  }

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

  editHostAccount(id: any, account: CreateAccount): Observable<any> {
    return this.http.put<any>(this.apiHost + 'account/host/' + id, account, {
      headers: this.headers,
    });
  }

  editGuestAccount(id: any, account: CreateAccount): Observable<any> {
    return this.http.put<any>(this.apiHost + 'account/guest/' + id, account, {
      headers: this.headers,
    });
  }

  findHostById(id: any): Observable<any> {
    return this.http.get<any>(this.apiHost + 'account/host/' + id, {
      headers: this.headers,
    });
  }

  findGuestById(id: any): Observable<any> {
    return this.http.get<any>(this.apiHost + 'account/guest/' + id, {
      headers: this.headers,
    });
  }

  deleteHostAccount(id: any): Observable<any> {
    return this.http.delete<any>(this.apiHost + 'account/host/' + id, {
      headers: this.headers,
    });
  }

  deleteGuestAccount(id: any): Observable<any> {
    return this.http.delete<any>(this.apiHost + 'account/guest/' + id, {
      headers: this.headers,
    });
  }

  login(data: any): Observable<any> {
    return this.http
      .post<any>(this.apiHost + 'account/login', data, {
        headers: this.headers,
      })
      .pipe(
        map((res) => {
          console.log(res);
          console.log('Login success');
          this.access_token = res.accessToken;
          localStorage.setItem('jwt', res.accessToken);
          this.loggedIn = true;
        })
      );
  }

  logout() {
    this.currentUser = null;
    localStorage.removeItem('jwt');
    localStorage.removeItem('role');
    localStorage.removeItem('loggedUser');
    this.access_token = null;
    this.loggedIn = false;
    this.role = '';
  }

  getByUsername(username: any): Observable<any> {
    return this.http.get<any>(this.apiHost + 'account/' + username, {
      headers: this.headers,
    });
  }

  tokenIsPresent() {
    return this.access_token != undefined && this.access_token != null;
  }

  getToken() {
    return this.access_token;
  }

  setRole(role: string) {
    this.role = role;
  }

  isAuthenticated(): boolean {
    return this.loggedIn;
  }

  isExpectedRole(): string {
    return this.role;
  }
}
