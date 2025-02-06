import { Routes } from '@angular/router';
import { HomeComponent } from '../features/home/home.component';
import { PricesComponent } from '../features/prices/prices.component';
import { AdultTreatmentsComponent } from '../features/adult-treatments/adult-treatments.component';
import { ChildTreatmentsComponent } from '../features/child-treatments/child-treatments.component';
import { LocationComponent } from '../features/location/location.component';
import { BookingComponent } from '../features/booking/booking.component';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { PagenotfoundComponent } from '../features/pagenotfound/pagenotfound.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'booking', component: BookingComponent },
  { path: 'location', component: LocationComponent, providers: [provideHttpClient(withFetch())] },
  { path: 'prices', component: PricesComponent },
  { path: 'adult-treatment', component: AdultTreatmentsComponent },
  { path: 'child-treatment', component: ChildTreatmentsComponent },


  {
    path: '**', pathMatch: 'full',
    component: PagenotfoundComponent
  },
];
