import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { finalize, Observable } from 'rxjs';
import { LoaderService } from './services/loader.service';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {

  constructor(public loaderService: LoaderService ) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<any>> {
    // show loader

    console.log(request)
    this.loaderService.show();
    return next.handle ( request).pipe(
        finalize(() => this.loaderService.hide())
    );
}
}
