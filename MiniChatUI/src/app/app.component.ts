import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Message {
  user: string;
  text: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule],  // ✅ Include FormsModule here
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user = '';
  message = '';
  messages: Message[] = [];

  sendMessage() {
    if (this.user && this.message) {
      this.messages.push({ user: this.user, text: this.message });
      this.message = '';
    }
  }
}
