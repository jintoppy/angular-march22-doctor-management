import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DoctorListComponent } from './components/doctor-list/doctor-list.component';
import { EditDoctorComponent } from './components/edit-doctor/edit-doctor.component';
import { CreateDoctorComponent } from './components/create-doctor/create-doctor.component';
import { DoctorLayoutComponent } from './components/doctor-layout/doctor-layout.component';

const routes: Routes = [
  {
    path: 'doctor',
    component: DoctorLayoutComponent,
    children: [
      {
        path: 'list',
        component: DoctorListComponent
      },
      {
        path: 'edit',
        component: EditDoctorComponent
      },
      {
        path: 'create',
        component: CreateDoctorComponent
      },
      {
        path: '',
        component: DashboardComponent
      }
    ]
  }
];



//doctor - Dashboard 
//doctor/view - doctor-details
//doctor/edit
//


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoctorRoutingModule { }
