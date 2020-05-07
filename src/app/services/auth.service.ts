import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Router, RouterOutlet } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  createNewUser(email: string, password: string){
    return new Promise(
      (resolve,reject) => {
        firebase.auth().createUserWithEmailAndPassword(email, password).then(
          () => {resolve();},
          (error) => {reject(error);}
        )
      }
    )
  }

  signInUser(email: string, password: string){
    return new Promise(
      (resolve,reject)=> {
        firebase.auth().signInWithEmailAndPassword(email,password).then(
          ()=>{resolve();},
          (error) =>{reject(error);}
        )
      }
    )
  }

  signOutUser(){
    firebase.auth().signOut();
  }

  signInWithGoogle(){
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function(result) { 
      var user = result.user;   
    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;    
    });
    

  }
}
