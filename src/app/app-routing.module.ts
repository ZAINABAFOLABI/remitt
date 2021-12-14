import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StaffComponent } from './components/staff/staff.component';
import { VendorsComponent } from './components/vendors/vendors.component';
import { TransactionComponent } from './components/transaction/transaction.component';
import { CustomersComponent } from './components/customers/customers.component';
import { CustomerEngagagementComponent } from './components/customer-engagagement/customer-engagagement.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NavbarComponent } from './components/navbar/navbar.component';
// import { pathToFileURL } from 'url';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { CareersComponent } from './components/careers/careers.component';
import { AboutComponent } from './components/about/about.component';
// import { ContactComponent } from './components/contact/contact.component';
import { CardRequestComponent } from './components/card-request/card-request.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';


const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'landing-page',component:LandingPageComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'about',component:AboutComponent},
  {path:'cardRequest',component:CardRequestComponent},
  // {path:'contact',component:ContactComponent},
  {path:'careers',component:CareersComponent},
  {path:'staff',component:StaffComponent},
  {path:'vendors',component:VendorsComponent},
  {path:'transaction',component:TransactionComponent},
  {path:'customers',component:CustomersComponent},
  {path:'customerengagagement',component:CustomerEngagagementComponent},
  {path:'**',component:NotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
