import { Injectable } from '@angular/core';
import * as signalR from '@microsoft/signalr';

@Injectable({ providedIn: 'root' })
export class ChatService {
  private hubConnection!: signalR.HubConnection;
  messages: { user: string, text: string }[] = [];

  startConnection() {
    this.hubConnection = new signalR.HubConnectionBuilder()
      .withUrl('http://localhost:5000/chathub')
      .build();

    this.hubConnection.start().catch(err => console.log(err));

    this.hubConnection.on('ReceiveMessage', (user, message) => {
      this.messages.push({ user, text: message });
    });
  }

  sendMessage(user: string, message: string) {
    this.hubConnection.invoke('SendMessage', user, message);
  }
}
