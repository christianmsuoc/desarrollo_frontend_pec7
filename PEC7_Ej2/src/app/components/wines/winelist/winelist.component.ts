import {Component, OnInit} from '@angular/core';
import {Wine} from '../../../models/wine';
import {WineQuantityChange} from '../../../models/wine-quantity-change';
import {WinesService} from '../../../services/wines.service';
import {FormControl} from "@angular/forms";
import {debounceTime, distinctUntilChanged, map} from "rxjs/operators";

@Component({
  selector: 'app-winelist',
  templateUrl: './winelist.component.html',
  styleUrls: ['./winelist.component.scss']
})
export class WinelistComponent implements OnInit {

  wines$ = this.wineService.getWines();
  wineSearch = new FormControl('');

  constructor(private wineService: WinesService) {}

  ngOnInit(): void {
    this.wineSearch.valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      map(text => {
        this.wines$ = this.wineService.getWines(text.trim())
      })
    ).subscribe();
  }


  changeQuantity(wineQuantityChange: WineQuantityChange): void {
    this.wineService.changeQuantity(wineQuantityChange.wine.id, wineQuantityChange.units);
  }

  identifyWine(index: number, wine: Wine): number {
    return wine.id;
  }


  wineCreated() {
    this.wines$ = this.wineService.getWines(this.wineSearch.value);
  }
}
