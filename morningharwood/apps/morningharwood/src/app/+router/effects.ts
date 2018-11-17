import { Location } from '@angular/common';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {
  Actions,
  Effect,
  ofType,
} from '@ngrx/effects';
import {
  map,
  tap,
} from 'rxjs/operators';
import * as RouterActions from './actions';


@Injectable()
export class RouterEffects {
  @Effect({ dispatch: false })
  navigate$ = this.actions$
                  .pipe(ofType(RouterActions.GO))
                  .pipe(
                    map((action: RouterActions.Go) => action.payload),
                    tap(({ path, query: queryParams, extras }) =>
                      this.router.navigate(path, { queryParams, ...extras })),
                  );

  @Effect({ dispatch: false })
  navigateBack$ = this.actions$
                      .pipe(ofType(RouterActions.BACK))
                      .pipe(
                        tap(() => this.location.back()),
                      );

  @Effect({ dispatch: false })
  navigateForward$ = this.actions$
                         .pipe(ofType(RouterActions.FORWARD))
                         .pipe(
                           tap(() => this.location.forward()),
                         );

  constructor(private actions$: Actions,
              private router: Router,
              private location: Location) {
  }
}
