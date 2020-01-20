import { SharedModule } from './modules/shared/shared.module';
import { EndpointsService } from './modules/core/services/endpoints.service';
import { StoreModule } from '@ngrx/store';
import { HomeModule } from './modules/home/home.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { reducers, metaReducers } from './store/reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { appEffects } from './store/effects/app.effects';
import { EffectsModule } from '@ngrx/effects';
import { AuthInterceptorService } from './modules/core/interceptors/auth-interceptor.service';
import { LocalStorageService } from 'src/app/modules/shared/services/local-storage.service';
import { SnackBarService } from './modules/core/services/snack-bar.service';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    BrowserAnimationsModule,
    HttpClientModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    EffectsModule.forRoot(appEffects),
    SharedModule,
    MatSnackBarModule,
  ],
  providers: [
    EndpointsService,
    LocalStorageService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true,
    },
    SnackBarService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
