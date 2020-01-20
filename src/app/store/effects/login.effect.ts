import { SnackBarService } from './../../modules/core/services/snack-bar.service';
import { LoginService } from './../../modules/login/services/login.service';

import { Injectable } from '@angular/core';
import { switchMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { Actions, Effect, ofType } from '@ngrx/effects';
import {
  GetLoginAction,
  ELoginActions,
  GetLoginSuccessAction,
  GetLoginFailureAction,
  GetLogoutAction,
  GetLogoutSuccesAction,
} from '../actions/login.actions';
import { LocalStorageService } from 'src/app/modules/shared/services/local-storage.service';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { IAppState } from '../state/app.state';
import { SearchProductsFailureAction } from '../actions/product.actions';

@Injectable()
export class LoginEffects {
  constructor(
    private actions: Actions,
    private loginService: LoginService,
    private localStorageService: LocalStorageService,
    private router: Router,
    private store: Store<IAppState>,
    private snackBarService: SnackBarService
  ) {}

  @Effect()
  getLogin$ = this.actions.pipe(
    ofType<GetLoginAction>(ELoginActions.GetLogin),
    switchMap((action) => {
      return this.loginService.login(action.payload.user);
    }),
    switchMap((user) => {
      this.localStorageService.saveTokenLocal(user.token);
      this.router.navigate(['']);
      return of(new GetLoginSuccessAction(user));
    }),
    catchError((error, caugth) => {
      this.store.dispatch(new GetLoginFailureAction(error));
      this.snackBarService.openSnackBar(error.statusText, 'close');
      return caugth;
    })
  );

  @Effect()
  getLogout$ = this.actions.pipe(
    ofType<GetLogoutAction>(ELoginActions.GetLogout),
    switchMap(() => {
      this.localStorageService.deleteTokenLocal();
      return of(new GetLogoutSuccesAction());
    }),
    catchError((error, caugth) => {
      this.store.dispatch(new SearchProductsFailureAction(error));
      return caugth;
    })
  );
}
