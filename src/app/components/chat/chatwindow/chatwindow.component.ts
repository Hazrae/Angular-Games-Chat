import { Component, OnInit } from '@angular/core';
import { Message } from 'src/app/models/message.model';
import { Subscription } from 'rxjs';
import { ChatserviceService } from 'src/app/services/chatservice.service';

@Component({
  selector: 'app-chatwindow',
  templateUrl: './chatwindow.component.html',
  styleUrls: ['./chatwindow.component.scss']
})
export class ChatwindowComponent implements OnInit {

  listMessages: Message[] = [];
  msgSub : Subscription;

  constructor(
    private chatService : ChatserviceService
  ) { }

  ngOnInit(): void {
    this.msgSub = this.chatService.msgSub.subscribe(
      (msg: Message[])=>{
        this.listMessages = msg;
      }
    );
    this.chatService.getMessages();
  } 

}
