import { Component } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: 'landing.page.html',
  styleUrls: ['landing.page.scss'],
})
export class LandingPage {
  startingPoint: string = '';
  destinationPoint: string = '';
  departureDate: string = '';

  constructor() {}

  onBook() {
    // Add booking logic here
    console.log('Booking details:', this.startingPoint, this.destinationPoint, this.departureDate);
    // Implement your booking logic (e.g., sending data to a server, etc.)
  }
}

