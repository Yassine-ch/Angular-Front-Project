import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './patient/register/register.component';
import { ConsultationFormComponent } from './consultation/consultation-form.component';
import { DoctorComponent } from './doctor/doctor.component';

const routes: Routes = [
  {path:'Register',component:RegisterComponent},
  {path:'Consultations',component:ConsultationFormComponent},
  {path:'Doctor',component:DoctorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
