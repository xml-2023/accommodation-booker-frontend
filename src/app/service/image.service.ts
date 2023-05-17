import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  apiHost: string = 'http://localhost:8080/api/';

  constructor(private http: HttpClient) { }

  uploadImages(files: File[], name: string): Observable<string> {
    const formData = new FormData();
    for (let file of files) {
      formData.append('file', file);
    }
    formData.append('name', name);
    return this.http.post<string>(this.apiHost + 'accommodation/image/upload', formData);
  }

  getImagesByAccommodation(name : string): Observable<any> {
    return this.http.get<string[]>(this.apiHost + 'accommodation/image', {params: new HttpParams().set('name', name)})
  }
}