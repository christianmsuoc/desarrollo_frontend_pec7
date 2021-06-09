import {Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Wine} from "../../../models/wine";

@Component({
  selector: 'app-wine-detail',
  templateUrl: './wine-detail.component.html',
  styleUrls: ['./wine-detail.component.scss']
})
export class WineDetailComponent {

  wine: Wine = this.activatedRoute.snapshot.data.wine;

  constructor(private activatedRoute: ActivatedRoute) {}

}
