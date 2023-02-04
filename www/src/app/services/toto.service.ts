import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs";
import {Toto} from "../models/toto";
@Injectable({
  providedIn: 'root'
})
export class TotoService {

  listTotos : any = [];
  constructor(private http: HttpClient) { }

  // @ts-ignore
  createToto(toto: any): Observable<any> {
    return this.http.post('/api/', toto);
  }

  getTotos(): Observable<any> {
    return this.http.get<Toto>('/api/');
  }

}
