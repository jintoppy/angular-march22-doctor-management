import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { DoctorRoutingModule } from './doctor-routing.module';
import { DoctorListComponent } from './components/doctor-list/doctor-list.component';
import { DoctorDetailsComponent } from './components/doctor-details/doctor-details.component';
import { CreateDoctorComponent } from './components/create-doctor/create-doctor.component';
import { EditDoctorComponent } from './components/edit-doctor/edit-doctor.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DoctorLayoutComponent } from './components/doctor-layout/doctor-layout.component';


@NgModule({
  declarations: [
    DoctorListComponent,
    DoctorDetailsComponent,
    CreateDoctorComponent,
    EditDoctorComponent,
    DashboardComponent,
    DoctorLayoutComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DoctorRoutingModule,
    HttpClientModule
  ]
})
export class DoctorModule { }
