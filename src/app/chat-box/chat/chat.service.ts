import { Injectable } from '@angular/core';

import { Subject } from 'rxjs';



export class Message {

  constructor(public author: string, public content: string) {}

}



@Injectable()

export class ChatService {

  userQst: string = '';

  constructor() {}



  conversation = new Subject<Message[]>();



  messageMap : { [char: string]: string } = {

    'hi': 'Hello',

    'who are you': 'My name is Agular Bot',

    'what is angular': 'Angular is the best framework ever',

    'default': 'I can\'t understand. Can you please repeat'

  };



  getBotAnswer(msg: string) {

    const userMessage = new Message('user', msg);

    this.conversation.next([userMessage]);

    const botMessage = new Message('bot', this.getBotMessage(msg));



    setTimeout(() => {

      this.conversation.next([botMessage]);

    }, 500);

  }



  getBotMessage(question: string) {

    const qst = this.stringFilter(question);

    const answer = this.messageMap[qst];

    return answer || this.messageMap['default'];

  }

 

  stringFilter(message:string){

   

    const msg = message.toLocaleLowerCase();



    console.warn(msg);

     if (msg == 'hi' || msg == 'hai' || msg == 'hiii' || msg == 'hii'){

      this.userQst = 'hi';

    }
    else if (msg) this.userQst = msg;
    else this.userQst = 'default';



    return this.userQst

  }

}

