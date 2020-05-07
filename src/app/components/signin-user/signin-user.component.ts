import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin-user',
  templateUrl: './signin-user.component.html',
  styleUrls: ['./signin-user.component.scss']
})
export class SigninUserComponent implements OnInit {

  signInForm : FormGroup;
  errorMessage : string;

  constructor(
    private formBuilder : FormBuilder,
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm()
  {
    this.signInForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password:['', [Validators.required, Validators.pattern(/[0-9a-zA-Z]{6,}/)]]
    })

  }

  onSubmit(){
    const email = this.signInForm.get('email').value;
    const password = this.signInForm.get('password').value;

    this.auth.signInUser(email,password).then(
      ()=>{this.router.navigate(['/admin']);},
      (error) => {this.errorMessage = error;}
    );
  }

  googleSignIn(){
    this.auth.signInWithGoogle();
    this.router.navigate(['/admin']);
  }
}
