import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DoctorRoutingModule } from './doctor-routing.module';
import { DoctorListComponent } from './components/doctor-list/doctor-list.component';
import { DoctorDetailsComponent } from './components/doctor-details/doctor-details.component';
import { CreateDoctorComponent } from './components/create-doctor/create-doctor.component';
import { EditDoctorComponent } from './components/edit-doctor/edit-doctor.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';


@NgModule({
  declarations: [
    DoctorListComponent,
    DoctorDetailsComponent,
    CreateDoctorComponent,
    EditDoctorComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    DoctorRoutingModule
  ]
})
export class DoctorModule { }
