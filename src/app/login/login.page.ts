import { Component} from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  username: string = '';
  password: string = '';
  chosenRole: string = '';

  constructor(private router: Router) {}

  onLogin() {
    // Add your login logic here
    // For example, you could authenticate the user and navigate to another page
    this.router.navigateByUrl('/dashboard');
  }
}


