import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { IAppState } from 'src/app/store/state/app.state';
import { GetLogoutAction } from 'src/app/store/actions/login.actions';
import { LocalStorageService } from 'src/app/modules/shared/services/local-storage.service';
import { Router } from '@angular/router';
import { getUser } from 'src/app/store/selectors/login.selectors';
import { TokenUser } from 'src/app/modules/login/models/token-user.model';
import { User } from 'src/app/modules/login/models/user.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  user: Observable<TokenUser> = this.store.pipe(select(getUser));

  constructor(
    private store: Store<IAppState>,
    private localStorageService: LocalStorageService,
    private router: Router
  ) {}

  ngOnInit() {}

  session() {
    this.isLogin === 'log out'
      ? this.store.dispatch(new GetLogoutAction())
      : this.router.navigate(['login']);
  }

  get isLogin() {
    const token = this.localStorageService.getTokenLocal();
    return token ? 'log out' : 'Log in';
  }
}
