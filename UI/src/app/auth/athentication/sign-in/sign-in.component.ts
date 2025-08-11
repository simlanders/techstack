import { Component, computed, OnInit, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'sign-in',
  templateUrl: './sign-in.component.html',
  imports: [MatButtonModule, CommonModule]
})

export class SignIn implements OnInit {
  isSignInAndSignUpButtonsVisible = signal(true);
  isSignInFormVisible = computed(() => {
    if (this.isSignInAndSignUpButtonsVisible()) {
      return false;
    } else {
      return true;
    }
  });

  ngOnInit() {
    console.log('ngOnInit() => is Sign In And Sign Up Buttons Visible: ' + this.isSignInAndSignUpButtonsVisible());
    console.log('ngOnInit() => is Sign In Form Visible: ' + this.isSignInFormVisible());
  }

  signInButtonClicked() {
    this.isSignInAndSignUpButtonsVisible.update(value => false);
    console.log('signInButtonClicked() => is Sign In And Sign Up Buttons Visible: ' + this.isSignInAndSignUpButtonsVisible());
    console.log('signInButtonClicked() => is Sign In Form Visible: ' + this.isSignInFormVisible());

  }
}