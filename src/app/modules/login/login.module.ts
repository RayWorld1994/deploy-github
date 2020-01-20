import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutLoginComponent } from './components/login-layout/layout.component';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { LoginRoutingModule } from '../login/login-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BackgroundComponent } from './components/background/background.component';

@NgModule({
  declarations: [LayoutLoginComponent, BackgroundComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatCardModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    FormsModule,
    LoginRoutingModule,
    FlexLayoutModule,
  ],
  exports: [LayoutLoginComponent],
})
export class LoginModule {}
