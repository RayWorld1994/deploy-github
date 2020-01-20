import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAppState } from 'src/app/store/state/app.state';
import { GetLoginAction } from 'src/app/store/actions/login.actions';

@Component({
  selector: 'app-login-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutLoginComponent implements OnInit {
  formLogin: FormGroup;
  durationInSeconds = 5;
  constructor(private fb: FormBuilder, private store: Store<IAppState>) {}

  ngOnInit() {
    this.formLogin = this.fb.group({
      email: this.fb.control('', Validators.required),
      password: this.fb.control('', Validators.required),
    });
  }

  get email() {
    return this.formLogin.get('email');
  }

  get password() {
    return this.formLogin.get('password');
  }

  login() {
    this.store.dispatch(new GetLoginAction(this.formLogin.value));
  }
}
