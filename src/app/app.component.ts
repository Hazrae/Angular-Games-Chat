import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'DemoFirebase';
  chatApp : any;

  constructor(){
        var firebaseConfig = {
          apiKey: "AIzaSyAspCtk-NbrVeO8GOJ4JS4rFWd9WR2Grn4",
          authDomain: "demofirebase-7fae2.firebaseapp.com",
          databaseURL: "https://demofirebase-7fae2.firebaseio.com",
          projectId: "demofirebase-7fae2",
          storageBucket: "demofirebase-7fae2.appspot.com",
          messagingSenderId: "158915893855",
          appId: "1:158915893855:web:ec5ce1229c4b3cb85e19ea"
        };
      
        firebase.initializeApp(firebaseConfig);
   
    
      // config firebase pour utilser la DB de Steve pour le chat

      // var firebaseConfig = {
      // apiKey:"AIzaSyB03IEgqHq7qxNihJGeK3bkX6ePeZomlnE",
      // authDomain:"demofirebase-6e210.firebaseapp.com",
      // databaseURL:"https://demofirebase-6e210.firebaseio.com",
      // projectId:"demofirebase-6e210",
      // storageBucket:"demofirebase-6e210.appspot.com",
      // messagingSenderId:"235998841647",
      // appId:"1:235998841647:web:3736bedaf5ed43f6c1afda"
      //       };
      
      // firebase.initializeApp(firebaseConfig);


  }
}
