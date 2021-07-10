
import { Injectable } from '@angular/core';
import io from 'socket.io-client';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SocketioService {
  public socket;

  constructor() { }

  setupSocketConnection() {
    this.socket = io(environment.API_URL, {
      // path: '/wedding',
      transports: ['websocket']
    })
    this.socket.on('connect', () => {
      console.log('Status Connection ==> ', this.socket.connected);
    });

  }

  disconnect() {
    if (this.socket) {
      this.socket.disconnect();
    }
  }
}
