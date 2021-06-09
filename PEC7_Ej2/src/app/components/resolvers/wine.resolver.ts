import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {WinesService} from "../../services/wines.service";
import {map} from "rxjs/operators";
import {Wine} from "../../models/wine";

@Injectable({
  providedIn: 'root'
})
export class WineResolver implements Resolve<Wine> {

  constructor(private wineService: WinesService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Wine> {
    return this.wineService.getWines().pipe(
      map((wines: Wine[]) => wines.find(w => w.id === parseInt(route.params.id, 10))!)
    );
  }
}
