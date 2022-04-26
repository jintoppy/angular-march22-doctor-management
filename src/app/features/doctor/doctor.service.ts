import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  constructor(private http: HttpClient, private auth: AuthService) { }

  getDoctors(){
    //interceptor
    const headers = new HttpHeaders()
                      .set('Authorization', `Bearer ${this.auth.getAuthToken()}`);

    return this.http.get('/api/doctors', {
      headers
    });
  }
}
