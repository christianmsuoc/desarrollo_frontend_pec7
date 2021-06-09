import {Injectable} from '@angular/core';
import {User} from "../models/user";
import {Observable, of} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {catchError, map} from "rxjs/operators";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userEndpoint = `${environment.apiUrl}/user`;

  constructor(private http: HttpClient) {}

  login(user: User): Observable<string | null> {
    return this.http.post<{msg: string, token: string}>(`${this.userEndpoint}/login`, user).pipe(
      map(response => response.token),
      catchError(() => of(null))
    )
  }

  register(user: User): Observable<string> {
    return this.http.post<any>(`${this.userEndpoint}/register`, user);
  }
}
