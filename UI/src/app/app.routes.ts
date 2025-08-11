import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignIn } from './auth/athentication/sign-in/sign-in.component';

export const routes: Routes = [

     {
    path: '',
    component: SignIn,
  }

  ];


