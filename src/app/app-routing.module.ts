import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { CruiseInfoComponent } from './staff/cruise-info/cruise-info.component';
import { BookingInfoComponent } from './staff/booking-info/booking-info.component';
import { StaffComponent } from './staff/staff.component';
import { CruiseBookingComponent } from './customer/cruise-booking/cruise-booking.component';
import { CustomerComponent } from './customer/customer.component';
import { BookedCruiseComponent } from './customer/booked-cruise/booked-cruise.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'landing',
    loadChildren: () => import('./landing/landing.module').then( m => m.LandingPageModule)
  },
  {
    path: 'cruise-info', // Add the path for CruiseInfoComponent.
    component: CruiseInfoComponent,
  },
  {
    path: 'booking-info', 
    component: BookingInfoComponent,
  },
  {
    path: 'staff-upload', 
    component: StaffComponent,
  },
  {
    path: 'cruise-booking',
    component: CruiseBookingComponent
  },
  {
    path: 'customer',
    component: CustomerComponent
  },
  {
    path: 'booked-cruise',
    component: BookedCruiseComponent
  }

  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }







