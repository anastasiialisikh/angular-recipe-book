import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ngOnInit() {
    // Your web app's Firebase configuration
    // var firebaseConfig = {
    //   apiKey: "AIzaSyDpnQWCZTUlOGVbM7aG1MZ8dvWjohmjqbk",
    //   authDomain: "recipe-book-0919.firebaseapp.com",
    //   databaseURL: "https://recipe-book-0919.firebaseio.com",
    //   projectId: "recipe-book-0919",
    //   storageBucket: "",
    //   messagingSenderId: "527874331152",
    //   appId: "1:527874331152:web:1837362c24667ad43eb095"
    // };
    // // Initialize Firebase
    // firebase.initializeApp(firebaseConfig);

   firebase.initializeApp({
      apiKey: 'AIzaSyDpnQWCZTUlOGVbM7aG1MZ8dvWjohmjqbk',
      authDomain: 'recipe-book-0919.firebaseapp.com',
   });
  }
}
