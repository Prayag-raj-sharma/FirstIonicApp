import { Component} from '@angular/core';

@Component({
  selector: 'app-booking-info',
  templateUrl: './booking-info.component.html',
  styleUrls: ['./booking-info.component.scss'],
})
export class BookingInfoComponent {
  staffName = 'Peter Quill'; // Replace with the actual staff member's name.
  cruises: any[] = [
    {
      name: 'Caribbean Cruise',
      customers: [
        { name: 'Alice', id: 1 },
        { name: 'Bob', id: 2 },
        { name: 'Charlie', id: 3 },
      ],
    },
    {
      name: 'Mediterranean Cruise',
      customers: [
        { name: 'David', id: 4 },
        { name: 'Eve', id: 5 },
      ],
    },
    {
      name: 'Baltic Sea Cruise',
      customers: [
        { name: 'Harper', id: 20 },
        { name: 'Evelyn', id: 21 },
        { name: 'Alexander', id: 22 },
        { name: 'Daniel', id: 23 },
        { name: 'Charlotte', id: 24 }
      ]
    },
    {
      name: "Scandinavian Cruise",
      customers: [
        { name : "Oliver", id : 11 },
        { name : "Emma", id: 12 },
        { name : "Liam", id: 13 }
      ]
    },
    {
      name: "Hawaii Cruise",
      customers: [
        { name: "Emily", id: 9 },
        { name: "Daniel", id: 10 }
      ]
    },
    {
      name: "Alaska Cruise",
      customers: [
        { name: "John", id: 6 },
        { name: "Mary", id: 7 },
        { name: "Paul", id: 8 }
      ]
    }    
  ];
  displayedCruises: any[] = [];

  constructor() {
    // Initialize the displayedCruises with the cruises data initially.
    this.displayedCruises = this.cruises;
  }

  /*constructor(private customerService: CustomerService) {}

  ionViewWillEnter() {
    this.getCustomers();
  }

  getCustomers() {
    this.customerService.getCustomers().subscribe(
      (response) => {
        this.cruises = response;
        this.displayedCruises = this.cruises; // Initially, display all cruises.
      },
      (error) => {
        console.error('Error fetching customers:', error);
      }
    );
  }  */

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

  deleteCruise(cruise: any) {
    // Replace this with your actual delete logic.
    // In this example, we'll simply remove the cruise from the list.
    const confirmDelete = confirm('Are you sure you want to delete this cruise?');
    if (confirmDelete) {
      this.cruises = this.cruises.filter((c) => c !== cruise);
      this.displayedCruises = this.displayedCruises.filter((c) => c !== cruise);
    }
  }

}