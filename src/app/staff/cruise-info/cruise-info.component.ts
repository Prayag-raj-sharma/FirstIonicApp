// staff/cruise-info/cruise-info.component.ts

import { Component, ChangeDetectorRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

//Component
import { BookingDialogComponent } from './booking-dialog/booking-dialog.component';
import { DeleteDialogComponent } from './delete-dialog/delete-dialog.component';
import { UpdateDialogComponent } from './update-dialog/update-dialog.component';


@Component({
  selector: 'app-cruise-info',
  templateUrl: './cruise-info.component.html',
  styleUrls: ['./cruise-info.component.scss'],
})
export class CruiseInfoComponent {
  staffName = 'Peter Quill'; // Replace with the actual staff member's name.
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

 
  constructor(public dialog: MatDialog, private cdr: ChangeDetectorRef) {
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

  updateCruise(cruise: any) {
    // Replace this with your actual update logic.
    // In this example, we'll just update the name of the cruise.
    const newName = prompt('Enter the new name for the cruise:');
    if (newName && newName.trim() !== '') {
      cruise.name = newName;
    }
  }

  
  openBookDialog(cruise: any): void {
    const dialogRef = this.dialog.open(BookingDialogComponent, {
      width: '300px',
      data: { cruiseName: cruise.name },
    });

    dialogRef.afterClosed().subscribe((result: number) => {
      if (result && result > 0) {
        cruise.totalBookings += result;
      }
    });
  }

  openDeleteDialog(cruise: any): void {
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      width: '300px',
      data: { cruiseName: cruise.name },
    });

    dialogRef.afterClosed().subscribe((result: boolean) => {
      if (result) {
            this.cruises = this.cruises.filter((c) => c !== cruise);
            this.displayedCruises = this.displayedCruises.filter((c) => c !== cruise);
      }
    });
  }

  openUpdateDialog(cruise: any): void {
    const dialogRef = this.dialog.open(UpdateDialogComponent, {
      width: '300px',
      data: { cruise: cruise },
    });

    dialogRef.afterClosed().subscribe((updatedCruise: any) => {
      if (updatedCruise) {
        Object.assign(cruise, updatedCruise);
        this.cdr.detectChanges();
      }
    });
  } 
}





  

