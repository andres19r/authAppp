import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  myForm: FormGroup = this.fb.group({
    email: ['test1@email.com', [Validators.required, Validators.email]],
    password: ['123456', [Validators.required, Validators.minLength(6)]],
  });

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit(): void {}

  login(): void {
    console.log(this.myForm.value);
    const { email, password } = this.myForm.value;

    this.authService.login(email, password)
      .subscribe(valid => {
        console.log(valid)
        if (valid === true) {
          this.router.navigateByUrl('/dashboard');
        } else {
          Swal.fire('Error', valid, 'error')
        }
      })

  }
}
