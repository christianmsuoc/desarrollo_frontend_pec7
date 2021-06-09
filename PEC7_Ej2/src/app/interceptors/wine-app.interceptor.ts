import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {UserStoreService} from "../services/user-store.service";

@Injectable()
export class WineAppInterceptor implements HttpInterceptor {

  constructor(private userStoreService: UserStoreService) {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = this.userStoreService.token;
    if (token) {
      return next.handle(request.clone({headers: request.headers.set('Authorization', token)}));
    }
    return next.handle(request);
  }
}
