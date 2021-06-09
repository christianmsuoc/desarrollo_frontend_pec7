import {Component, Output, EventEmitter} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {WineValidators} from './wine-validators';
import {WinesService} from '../../../services/wines.service';

@Component({
  selector: 'app-wine-new',
  templateUrl: './wine-new.component.html',
  styleUrls: ['./wine-new.component.scss']
})
export class WineNewComponent {

  @Output() wineCreated = new EventEmitter<void>();
  wineImageUrlPattern = 'https?:\\/\\/(www\\.)?[-a-zA-Z0-9@:%._\\+~#=]{1,256}\\.[a-zA-Z0-9()]{1,6}\\b([-a-zA-Z0-9()@:%_\\+.~#?&//=]*)';

  wineForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, WineValidators.nameValid]],
    price: [1, [Validators.required, Validators.min(1)]],
    imageUrl: ['', [
      Validators.required,
      Validators.pattern(this.wineImageUrlPattern)
    ]],
    isOnSale: [false],
  });

  constructor(private fb: FormBuilder, private wineService: WinesService) {}

  createWine(wineForm: FormGroup): void {
    this.wineService.create(wineForm.value).subscribe(() => {
      this.wineCreated.emit();
    })
  }

  get name(): FormControl {
    return this.wineForm?.controls.name as FormControl;
  }

  get price(): FormControl {
    return this.wineForm?.controls.price as FormControl;
  }

  get imageUrl(): FormControl {
    return this.wineForm?.controls.imageUrl as FormControl;
  }

  get isOnSale(): FormControl {
    return this.wineForm.controls.isOnSale as FormControl;
  }
}
