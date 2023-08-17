
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

// Modules
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';




import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';



import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';



// Staffs
import { BookingInfoComponent } from './staff/booking-info/booking-info.component';
import { CruiseInfoComponent } from './staff/cruise-info/cruise-info.component';
import { StaffComponent } from './staff/staff.component';
import { CustomerService } from './providers/customer.service';

// Customers
import { CruiseBookingComponent } from './customer/cruise-booking/cruise-booking.component';
import { CustomerComponent } from './customer/customer.component';
import { BookedCruiseComponent } from './customer/booked-cruise/booked-cruise.component';
import { BookingFormComponent } from './customer/booking-form/booking-form.component';
import { BookingDialogComponent } from './staff/cruise-info/booking-dialog/booking-dialog.component';
import { DeleteDialogComponent } from './staff/cruise-info/delete-dialog/delete-dialog.component';
import { UpdateDialogComponent } from './staff/cruise-info/update-dialog/update-dialog.component';





@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent, BookingInfoComponent, CruiseInfoComponent, StaffComponent,
                 CruiseBookingComponent, CustomerComponent, BookedCruiseComponent, BookingFormComponent,
                BookingDialogComponent, DeleteDialogComponent, UpdateDialogComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, FormsModule,
           MatButtonModule, MatIconModule, MatDialogModule, MatInputModule],
  exports: [CruiseInfoComponent],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, CustomerService],
  bootstrap: [AppComponent],
})
export class AppModule {}
