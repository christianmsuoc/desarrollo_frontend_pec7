import {AbstractControl, ValidationErrors} from '@angular/forms';

export class WineValidators {
  public static nameValid(control: AbstractControl): ValidationErrors | null {
    const wineName = control.value;
    const validNames = ['Laya', 'K-Naina', 'Verdejo', 'Monastrell'];
    if (validNames.includes(wineName)) {
      return null;
    }
    return {nameValid: true};
  }
}
