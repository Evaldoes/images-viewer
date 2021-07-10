import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { NbMenuItem, NbSidebarService } from '@nebular/theme';
import { FullScreenModalComponent } from './viewer/shared/components/full-screen-modal/full-screen-modal.component';
import { SocketioService } from './viewer/shared/services/socketio.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public dialogRef: MatDialogRef<FullScreenModalComponent>
  title = 'images-viewer';
  numbers = 0;

  oldPhotos = [];
  queuePhotos = [];



  constructor(private sidebarService: NbSidebarService,
    private modalViewer: MatDialog,
    private socketService: SocketioService
    ) {
  }

  ngOnInit(){

    this.socketService.setupSocketConnection();


    setInterval(() => {



    },3000)
  }

  ngOnDestroy() {
    this.socketService.disconnect();
  }

  toggleCompact() {
    this.sidebarService.toggle(true, 'left');
  }


  fullScreen() {

    // let elem = document.documentElement;
    // let methodToBeInvoked = elem.requestFullscreen ||
    //   elem?.webkitRequestFullScreen || elem['mozRequestFullscreen']
    //   ||
    //   elem['msRequestFullscreen'];
    // if (methodToBeInvoked) methodToBeInvoked.call(elem);
    this.dialogRef = this.modalViewer.open(FullScreenModalComponent, {

      data: {

        photos: [
          {
            url: 'https://picsum.photos/1024/768',
            subject: '',
            code: ''
          },

          {
            url: 'https://picsum.photos/1024/768',
            subject: '',
            code: ''
          }

        ]


        }
    });

    setInterval(() => {

      if (this.dialogRef && this.dialogRef.componentInstance) {
        function randomInteger(min, max) {
          return Math.floor(Math.random() * (max - min + 1)) + min;
        }
        this.dialogRef.componentInstance.data = { photos: [
          {
            url: `https://picsum.photos/1024/76${randomInteger(0,9)}`,
            subject: '',
            code: ''
          },

          {
            url: `https://picsum.photos/1024/76${randomInteger(0,9)}`,
            subject: '',
            code: ''
          }
        ]  };
        console.log('entrou aqui',this.dialogRef.componentInstance)
      }
    }, 3000)
  }



}
