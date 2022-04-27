import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  constructor(private http: HttpClient, private auth: AuthService) { }

  deleteDoctor(doctorId:number){
    return this.http.delete(`/api/doctors/${doctorId}`);
  }

  getDoctor(doctorId:number){
    return this.http.get(`/api/doctors/${doctorId}`);
  }

  getDoctors(){
    return this.http.get('/api/doctors');
  }
}
