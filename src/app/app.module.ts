import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ConsultationFormComponent } from './consultation/consultation-form.component';
import { PatientComponent } from './patient/patient.component';
import { DoctorComponent } from './doctor/doctor.component';
import { RouterOutlet } from "@angular/router";
import { RegisterComponent } from './patient/register/register.component';

@NgModule({
    declarations: [
        AppComponent,
        DoctorComponent,
        ConsultationFormComponent,
        PatientComponent,
        RegisterComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        ReactiveFormsModule,
        FormsModule,
        RouterOutlet,
    ]
})
export class AppModule { }
