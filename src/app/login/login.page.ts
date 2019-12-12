import { Component, OnInit } from '@angular/core';
import { ToastService } from '../services/toast.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm : FormGroup;

  message: string;
  error: boolean;
  
  constructor(private router: Router,
    public formBuilder: FormBuilder,
    private authService: AuthService,
    private toastService: ToastService) { }

  ngOnInit() {
    this.initForm();
  }

  initForm(){
    //login forms validators
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern(/[0-9a-zA-Z]{6,}/)]]
    });
  }
    // methode du form login
  onLogin(formValue){
    this.authService.login(formValue.email, formValue.password)
    .then( data => {
      this.error = false; 
      this.router.navigate(['']);
      this.authService.loadProfile();
    //this.toastService.showMessage("Content de vous revoir !");
    })
    .catch( error => {
      this.error = true; 
      this.message = error.message;
    })
  }

}
