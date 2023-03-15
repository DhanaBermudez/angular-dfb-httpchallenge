import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
@Injectable()
export class HttpclientService {
  constructor(private http: HttpClient) {}
  getUsersfromServer() {
    let params = new HttpParams().set('limit', 5);
    return this.http.get(
      'https://jsonplaceholder.typicode.com/users?_start=0&_limit=6'
    );
  }
}
