import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup-user',
  templateUrl: './signup-user.component.html',
  styleUrls: ['./signup-user.component.scss']
})
export class SignupUserComponent implements OnInit {

  signUpForm : FormGroup;
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
    this.signUpForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password:['', [Validators.required, Validators.pattern(/[0-9a-zA-Z]{6,}/)]]
    })

  }

  onSubmit(){
    const email = this.signUpForm.get('email').value;
    const password = this.signUpForm.get('password').value;

    this.auth.createNewUser(email,password).then(
      ()=>{this.router.navigate(['/admin']);},
      (error) => {this.errorMessage = error;}
    );
  }

}
