// import { Component, createPlatform, OnInit } from '@angular/core';
// import { FormGroup, FormBuilder, Validators } from "@angular/forms";
// import { ActivatedRoute } from "@angular/router";

// import { ContactService } from 'src/app/services/contact.service';
// @Component({
//   selector: 'app-contact',
//   templateUrl: './contact.component.html',
//   styleUrls: ['./contact.component.css']
// })
// export class ContactComponent implements OnInit {
//   contactForm!: FormGroup;

//   firstName: string;
//   lastName: string;
//   phoneNumber: string;
//   email:string;
//   message: string;
//   contactFormLoading: boolean = false;
//   constructor(
//     private contactService: ContactService,
//     private formBuilder: FormBuilder, 
  
//     private activatedRoute: ActivatedRoute
//   ) {
//     this.createForm();
//     this.firstName="";
//     this.lastName="";
//     this.email="";
//     this.phoneNumber="";
//     this.message="";
   
//    }

//   ngOnInit(): void {
    
//   }
//   createForm(){
//     this.contactForm = this.formBuilder.group({
//       firstName: ["", [Validators.required]],
//       lastName: ["", [Validators.required]],
//       phoneNumber: ["", [Validators.required]],
//       email: ["", [Validators.required]],
//      message: ["", [Validators.required]]
//     });
//   }

//   contactRemitt() {
//     this.contactFormLoading = true;
//     let data = {
      
//       firstName: this.contactForm.value.firstName,
//       lastName: this.contactForm.value.lastName,
//       email: this.contactForm.value.email,
//       phoneNumber: this.contactForm.value.phoneNumber,
//       message: this.contactForm.value.message
//     };
//     this.contactService.contactRemitt(data).subscribe(
//       (response: any) => {
//         this.contactFormLoading = false;
//         this.createNotification("success", "Successful", response.message);
//       },
//       (error: any) => {
//         if (error.status === 307) {
//           return;
//         } else {
//           this.createNotification("error", "Error Occurred", error.message);
//         }
//         this.contactFormLoading = false;
//       }
//     );
//   }

//   createNotification(type: string, title: string, message: string): void {
//     this.notification.create(type, title, message);
//   }
// }
