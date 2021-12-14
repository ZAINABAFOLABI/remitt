import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';
// import{AngularFireModule}from '@angular/fire';
// import { AngularFirestoreModule } from '@angular/fire/firestore';
// import { AngularFireStorageModule } from '@angular/fire/storage';
// import { AngularFireAuthModule } from '@angular/fire/auth';
import { initializeApp } from '@firebase/app';
import { getAnalytics } from '@firebase/analytics';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StaffComponent } from './components/staff/staff.component';
import { VendorsComponent } from './components/vendors/vendors.component';
import { TransactionComponent } from './components/transaction/transaction.component';
import { CustomersComponent } from './components/customers/customers.component';
import { CustomerEngagagementComponent } from './components/customer-engagagement/customer-engagagement.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AboutComponent } from './components/about/about.component';
// import { ContactComponent } from './components/contact/contact.component';
import { CareersComponent } from './components/careers/careers.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { CardRequestComponent } from './components/card-request/card-request.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    StaffComponent,
    VendorsComponent,
    TransactionComponent,
    CustomersComponent,
    CustomerEngagagementComponent,
    NavbarComponent,
    LoginComponent,
    NotFoundComponent,
    DashboardComponent,
    AboutComponent,
    // ContactComponent,
    CareersComponent,
    ForgotPasswordComponent,
    SideBarComponent,
    CardRequestComponent,
    LandingPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
    // AngularFireModule.initializeApp(environment.firebase, 'ADS' ),
    // AngularFirestoreModule,
    // AngularFireAuthModule,
    // AngularFireStorageModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
