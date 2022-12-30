import { Component, OnInit } from '@angular/core';
import { Message, ChatService } from './chat.service'
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  messages: Message[] = [];
  value: string = '';
  welcome = ["Welcome to TC ☺ Food Corner ","I am Food Corner ChatBot","How can I help you ?"]
  constructor(public chatService: ChatService) { 
  }

  ngOnInit() {
    this.chatService.conversation.subscribe((val) => {
      this.messages = this.messages.concat(val);
    });
  }

  sendMessage() {
    if (this.value != '') {
      this.chatService.getBotAnswer(this.value);
      this.value = '';
    }
  }

}