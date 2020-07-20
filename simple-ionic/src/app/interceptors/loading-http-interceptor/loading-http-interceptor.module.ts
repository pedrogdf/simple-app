import { NgModule, Injectable } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable, throwError, EMPTY, from } from 'rxjs';
import { LoadingController } from '@ionic/angular';
import { catchError, finalize, tap, switchMap } from 'rxjs/operators';

@Injectable()

export class HttpsRequestInterceptor implements HttpInterceptor {

  constructor(
    private loadingController: LoadingController,
  ) {}

  intercept(req: HttpRequest<any>,next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.url.indexOf('http') !== 0) {
      return next.handle(req);
    }

    return from(this.loadingController.create())
		.pipe(
			tap((loading) => {
				return loading.present();
			}),
			switchMap((loading) => {
				return next.handle(req).pipe(
					finalize(() => {
						loading.dismiss();
					})
				);
			})
		);
  }
}

@NgModule({
  providers: [
   {
    provide: HTTP_INTERCEPTORS,
    useClass: HttpsRequestInterceptor,
    multi: true,
   },
  ],
  })
export class LoadingHttpInterceptorModule { }
