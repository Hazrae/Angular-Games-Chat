import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import {Game} from '../models/game.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  games : Game[] = [];

  gamesSubject = new Subject<Game[]>();

  constructor() { }

  emitGames(){
    this.gamesSubject.next(this.games);
  }

  saveGames(){
    firebase.database().ref('/games').set(this.games);
  }

  getGames(){
    firebase.database().ref('/games').on('value', 
    (data)=> 
    {this.games = data.val() ? data.val() : [];
    this.emitGames();
    })
  }

  getSingleGame(id : number){
    return new Promise(
      (resolve,reject) => {
        firebase.database().ref('/games/'+id).once('value').then(
          (data) => {
            resolve(data.val());
          },
          (error) => {reject(error);}
        )
      }
    )
  }

  createNewGame(game : Game){
    this.games.push(game);
    this.saveGames();
    this.emitGames();
  }

  removeGame(game : Game){

    if(game.photo){
      const storageRef = firebase.storage().refFromURL(game.photo);
      storageRef.delete().then(
        ()=>{console.log("photo supprimée")},
      ).catch(
        (error) => { console.log("Fichier non trouvé : "+error);}
      )
    }

    const gameIndex = this.games.findIndex(
      (gameElement) => {
        if(gameElement === game) {return true;}
      }
    )
    this.games.splice(gameIndex,1);
    this.saveGames();
    this.emitGames();
  }

  uploadFile(file: File){
    return new Promise(
      (resolve,reject)=>{
      const uniqueFileName = Date.now().toString();
      const upload = firebase.storage().ref().child('images/'+uniqueFileName+file.name).put(file);

      upload.on(firebase.storage.TaskEvent.STATE_CHANGED,
        () => {console.log("loading...")},
        (error) => {console.log(error); reject()},
        () => {resolve(upload.snapshot.ref.getDownloadURL());}
        )
      }
    )
  }
}
