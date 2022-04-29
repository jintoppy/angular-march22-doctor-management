import { Component, OnInit } from '@angular/core';
import { DoctorService } from '../../doctor.service';
import { Doctor } from 'src/app/models/doctor';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-doctor-list',
  templateUrl: './doctor-list.component.html',
  styleUrls: ['./doctor-list.component.css']
})
export class DoctorListComponent implements OnInit {
  doctors$: Observable<Doctor[]> = this.doctorService.getDoctors();
  constructor(private doctorService: DoctorService) { }

  ngOnInit(): void {
    // this.doctorService.getDoctors()
    //   .subscribe((doctors: Doctor[]) => {
    //     this.doctors = doctors;
    //   });
  }

}
