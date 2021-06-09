import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Wine} from '../models/wine';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class WinesService {

  api = `${environment.apiUrl}/wine`;

  constructor(private http: HttpClient) {
  }

  getWines(text?: string): Observable<Wine[]> {
    return this.http.get<Wine[]>(this.api).pipe(
      map(ws => text ? ws.filter(wine => wine.name.toLowerCase().includes(text.toLowerCase())) : ws)
    );
  }

  changeQuantity(wineId: number, changeInQuantity: number): Observable<Wine> {
    return this.http.patch<Wine>(`${this.api}/${wineId}`, {quantityInCart: changeInQuantity})
  }

  create(wine: Wine): Observable<Wine> {
    return this.http.post<Wine>(this.api, wine);
  }
}
