import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  
})
export class LoginComponent {

  loginForm: FormGroup;


  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      userId: ['', Validators.required],
      password: ['', Validators.required]
    });
  }



  onSubmit() {

    if (this.loginForm.valid) {
      const userId = this.loginForm.get('userId')?.value;
      const password = this.loginForm.get('password')?.value;
      if (userId == 'nokia' && password == 'password123') {
        this.router.navigate(['/header/home']);
        console.log("login Success");
        
      } else {
        alert('Incorrect userId and password');
      }
    } else {
      alert('userId and password are required');
    }
  }

}
