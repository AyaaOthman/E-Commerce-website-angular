import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { CartComponent } from './cart/cart.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLink, RouterModule } from '@angular/router';

@NgModule({
  declarations: [LoginComponent, SignupComponent, CartComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterLink,
    RouterModule,
    ReactiveFormsModule,
  ],
})
export class AuthModule {}
