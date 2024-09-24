import { Component } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
@Component({
  selector: 'app-newaccount',
  templateUrl: './newaccount.component.html',
  styleUrls: ['./newaccount.component.css']
})
export class NewaccountComponent {
  createAccountForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.createAccountForm = this.fb.group({
      userId: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    });
  }

  onCreateAccountSubmit() {
    if (this.createAccountForm.valid) {
      const { userId, email, password, confirmPassword } = this.createAccountForm.value;

      if (password !== confirmPassword) {
        alert('Passwords do not match');
        return;
      }

      console.log('Account created for', userId);
      alert('Account created successfully');
      // Implement service to handle account creation here
    } else {
      alert('All fields are required and must be valid');
    }
  }
}
