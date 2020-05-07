import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import * as firebase from 'firebase';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isAuth : boolean;

  constructor(
    private auth : AuthService
  ) { }

  ngOnInit(): void {
    firebase.auth().onAuthStateChanged(
      (user)=>{
        if(user){
          this.isAuth = true;
        }else this.isAuth = false;
      }
    )
    
  }

  onSignOut(){
    this.auth.signOutUser();
  }

}
