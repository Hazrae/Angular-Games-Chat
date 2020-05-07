import { Injectable } from '@angular/core';
import { Message} from '../models/message.model'
import { Subject } from 'rxjs';
import * as firebase from 'firebase';


@Injectable({
  providedIn: 'root'
})
export class ChatserviceService {

  msg : Message[] = [];

  msgSub = new Subject<Message[]>();

  constructor() { }

  emitMessages(){
    this.msgSub.next(this.msg);
  }

  saveMessages(){
    firebase.database().ref('/chat').set(this.msg);
  }

  getMessages(){
    firebase.database().ref('/chat').on('value', 
    (data)=> 
    {this.msg = data.val() ? data.val() : [];
    this.emitMessages();
    })
  }

 
  createNewMsg(message : Message){
    this.msg.push(message);
    this.saveMessages();
    this.emitMessages();
  }  
}
