import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';   // <-- gives *ngFor, *ngIf
import { FormsModule } from '@angular/forms';     // <-- gives [(ngModel)]
import { ChatService } from './chat.service';

@Component({
  selector: 'app-root',
  standalone: true,  // Angular 19 standalone component
  imports: [CommonModule, FormsModule], // <-- required modules
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  user = '';
  message = '';

  constructor(public chatService: ChatService) {}

  ngOnInit() {
    this.chatService.startConnection();
  }

  sendMessage() {
    if (this.user && this.message) {
      this.chatService.sendMessage(this.user, this.message);
      this.message = '';
    }
  }
}
