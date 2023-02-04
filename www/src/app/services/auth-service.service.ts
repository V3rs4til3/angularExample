import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {user} from "../models/user";

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private http: HttpClient) { }

  login(user: any): Observable<any> {
    return this.http.post<any>('/api/login', user);
  }

  register(user: user): Observable<any> {
    return this.http.post<any>('/api/register', user);
  }
}
