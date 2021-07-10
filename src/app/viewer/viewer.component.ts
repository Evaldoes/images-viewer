import { Component, OnDestroy, OnInit } from '@angular/core';
import { SocketioService } from './shared/services/socketio.service';

@Component({
  selector: 'app-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.scss']
})
export class ViewerComponent implements OnInit, OnDestroy {

  constructor(

  ) { }

  ngOnInit(): void {

  }

  ngOnDestroy() {
    // this.socketService.disconnect();
  }

}
