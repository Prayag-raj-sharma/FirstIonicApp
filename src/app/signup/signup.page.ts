import { Component} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage {
  username: string = '';
  email: string = '';
  password: string = '';
  chosenRole: string = '';

  constructor(private router: Router) {}

  onSignup() {
    console.log('Chosen Role:', this.chosenRole);
    // Add your signup logic here
    // For example, you could create a new user account and navigate to a success page
    if (this.chosenRole === 'staff') {
      console.log('staff')
    } else if (this.chosenRole === 'customer') {
      console.log('customer')
    }
    this.router.navigateByUrl('/success');
  }
}
