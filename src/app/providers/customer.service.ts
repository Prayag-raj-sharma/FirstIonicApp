

// providers/customer.service.ts

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  constructor() {}

  getCustomers(): Observable<any> {
    // Replace this with actual API call to fetch customer data from the server.
    // For demonstration purposes, we will return dummy data.
    const dummyData = [
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
      // Add more cruise data as needed...
    ];
    return of(dummyData);
  }

  searchCustomers(searchText: string): Observable<any> {
    // Replace this with actual API call to search for customers based on searchText.
    // For demonstration purposes, we will return a filtered dummy data.
    const dummyData = [
      { name: 'Alice', id: 1 },
      { name: 'Charlie', id: 3 },
    ];
    const filteredData = dummyData.filter(
      (customer) =>
        customer.name.toLowerCase().includes(searchText.toLowerCase()) ||
        customer.id.toString() === searchText
    );
    return of(filteredData);
  }
}
