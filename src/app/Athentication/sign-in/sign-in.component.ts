import { Component} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { CommonModule, NgIf } from '@angular/common';


@Component({
  selector: 'sign-in',
  templateUrl: './sign-in.component.html',
  imports:[MatButtonModule,NgIf,CommonModule]
})
export class SignIn {
  isVisible: boolean = true;
 
}