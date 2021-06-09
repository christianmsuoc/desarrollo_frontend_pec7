import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserStoreService {

  WINE_TOKEN = 'wine-token';

  saveToken(token: string): void {
    localStorage.setItem(this.WINE_TOKEN, token);
  }

  get token(): string | null {
    return localStorage.getItem(this.WINE_TOKEN);
  }

  get isLogged(): boolean {
    return this.token !== null;
  }

  deleteToken(): void {
    localStorage.removeItem(this.WINE_TOKEN);
  }
}
