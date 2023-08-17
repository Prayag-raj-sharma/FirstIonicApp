import { Component } from '@angular/core';

@Component({
  selector: 'app-booked-cruise',
  templateUrl: './booked-cruise.component.html',
  styleUrls: ['./booked-cruise.component.scss'],
})
export class BookedCruiseComponent {
    staffName = 'Steve Rogers'; // Replace with the actual staff member's name.
    cruises: any[] = [
      {
        name: 'Caribbean Cruise',
        totalBookings: 3, 
        services: ['Swimming Pool', 'Gym', 'Spa'], 
        source: 'Miami, USA', 
        destination: 'Nassau, Bahamas', 
      },
      {
        name: 'Mediterranean Cruise',
        totalBookings: 2,
        services: ['Fine Dining', 'Entertainment Shows', 'Excursions'],
        source: 'Barcelona, Spain',
        destination: 'Rome, Italy',
      }
    ];
    displayedCruises: any[] = [];
  
    constructor() {
      // Initialize the displayedCruises with the cruises data initially.
      this.displayedCruises = this.cruises;
    }
  
    searchCruise(event: any) {
     const searchText = event.target.value;
      if (!searchText) {
        this.displayedCruises = this.cruises; // If search text is empty, display all cruises.
      } else {
        this.displayedCruises = this.cruises.filter(
          (cruise) => cruise.name.toLowerCase().includes(searchText.toLowerCase())
        );
      }
    }
  
    
  
  }
