
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BookingFormComponent } from '../booking-form/booking-form.component';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-cruise-booking',
  templateUrl: './cruise-booking.component.html',
  styleUrls: ['./cruise-booking.component.scss'],
})
export class CruiseBookingComponent {

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
    },
    {
    name: 'Baltic Sea Cruise',
    totalBookings: 5, 
    services: ['Swimming Pool', 'Gym', 'Spa'], 
    source: 'Stockholm, Sweden', 
    destination: 'Helsinki, Finland', 
  },
  {
    name: "Scandinavian Cruise",
    totalBookings: 3,
    services: ['Fine Dining', 'Entertainment Shows', 'Excursions'],
    source: 'Copenhagen, Denmark',
    destination: 'Oslo, Norway',
  },
  {
    name: "Hawaii Cruise",
    totalBookings: 2,
    services: ['Beach Activities', 'Hawaiian Luau'],
    source: 'Honolulu, Hawaii, USA',
    destination: 'Maui, Hawaii, USA',
  },
  {
    name: "Alaska Cruise",
    totalBookings: 3,
    services: ['Wildlife Viewing', 'Glacier Tours', 'Alaskan Cuisine'],
    source: 'Seattle, Washington, USA',
    destination: 'Juneau, Alaska, USA',
  },
  ];
  displayedCruises: any[] = [];
  numberOfBookings: number = 10; // Initialize with an example value

  constructor(private dialog: MatDialog, private toastController: ToastController) {
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

  bookCruise(selectedCruise: any): void {
    const dialogRef = this.dialog.open(BookingFormComponent, {
      width: '400px', // Adjust the width as needed
    });

    dialogRef.afterClosed().subscribe(async (result) => {
      // Handle form submission or closing actions here
      if (result !== undefined) {
        selectedCruise.totalBookings += result;

        const toast = await this.toastController.create({
          message: 'Cruise booked successfully!',
          duration: 2000, 
          position: 'bottom', 
          cssClass: 'custom-toast',
          animated: true,
        });
        await toast.present();
      }
    });
  }    
}
