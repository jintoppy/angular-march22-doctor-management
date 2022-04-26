import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    
  }

  onLoginClick(username:string, password: string){
    this.authService
    .createUser(username, password)
    .subscribe((val: any) => {
      console.log(val);      
      this.router.navigateByUrl('/doctor');
    });
  }

}
