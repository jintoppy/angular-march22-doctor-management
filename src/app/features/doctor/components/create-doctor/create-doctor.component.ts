import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { DoctorService } from '../../doctor.service';


@Component({
  selector: 'app-create-doctor',
  templateUrl: './create-doctor.component.html',
  styleUrls: ['./create-doctor.component.css']
})
export class CreateDoctorComponent implements OnInit {
  createDoctorForm = new FormGroup({
    name: new FormControl(),
    specialization: new FormControl()
  })
  constructor(private doctorService: DoctorService, private router: Router) { }

  ngOnInit(): void {
    this.doctorService.getSpecializations()
      .subscribe((val:string[]) => {
        console.log(val);
      });
  }

  onCreate(){
    const newUser = this.createDoctorForm.value;
    this.doctorService.createDoctor(newUser)
      .subscribe(() => {
        this.router.navigateByUrl('/doctor/list');
      });

  }

}
