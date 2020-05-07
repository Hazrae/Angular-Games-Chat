import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ChatserviceService } from 'src/app/services/chatservice.service';
import { Message } from 'src/app/models/message.model';

@Component({
  selector: 'app-chatform',
  templateUrl: './chatform.component.html',
  styleUrls: ['./chatform.component.scss']
})
export class ChatformComponent implements OnInit {

  msgForm: FormGroup;
  

  constructor(
    private formBuilder : FormBuilder,
    private router : Router,
    private chatService: ChatserviceService
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm()
  {
    this.msgForm = this.formBuilder.group({     
      user:['', [Validators.required]],
      message:['', [Validators.required]]    
    })

  }

  onSaveMessage(){  
    const newMsg = new Message();
    
    newMsg.user = this.msgForm.get('user').value;
    newMsg.message = this.msgForm.get('message').value;
    newMsg.date = new Date();

    this.chatService.createNewMsg(newMsg);
  }

}
