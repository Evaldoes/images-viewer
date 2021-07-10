import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { NbMenuItem, NbSidebarService } from '@nebular/theme';
import { take } from 'rxjs/operators';
import { FullScreenModalComponent } from './viewer/shared/components/full-screen-modal/full-screen-modal.component';
import { SocketioService } from './viewer/shared/services/socketio.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  public dialogRef: MatDialogRef<FullScreenModalComponent>
  title = 'images-viewer';
  numbers = 0;

  oldPhotos = [];
  queuePhotos = [];
  currentIndex: number = 0;
  projector;

  splash = {
    photos: [
      {
        url: `../../../../../../../assets/splash.png`,
        subject: null,
        code: null
      },
      {
        url: null,
        subject: null,
        code: null
      }
    ]
  }



  constructor(private sidebarService: NbSidebarService,
    private modalViewer: MatDialog,
    private socketService: SocketioService
  ) {
  }

  ngOnInit() {
    this.socketService.setupSocketConnection();
    setInterval(() => {

      this.queuePhotos.push(
        {
          url: `https://picsum.photos/1024/76${this.randomInteger(0, 9)}`,
          subject: 'Angular 7',
          code: '123'
        },
      )
      console.log('actual queue ==> ', this.queuePhotos);
    }, 10000)
  }

  randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  ngOnDestroy() {
    this.socketService.disconnect();
  }

  toggleCompact() {
    this.sidebarService.toggle(true, 'left');
  }

  fullScreen() {
    this.dialogRef = this.modalViewer.open(FullScreenModalComponent, {
      data: {
        ...this.splash
      }
    });

    this.dialogRef.afterClosed().pipe(take(1)).subscribe(
      () => {
        clearInterval(this.projector);
      }
    );

    this.projector = setInterval(() => {
      console.log('test');

      if (this.dialogRef && this.dialogRef.componentInstance) {
        if (this.queuePhotos.length != 0) {
          this.dialogRef.componentInstance.data = {
            photos: [
              this.queuePhotos[0],
              this.queuePhotos[1],
            ]
          };


          this.oldPhotos.push(this.queuePhotos[0])
          this.queuePhotos.shift();

          console.log('lista de fotos atualizada ==> ', this.queuePhotos);
          console.log('fotos antigas atualizadas ==> ', this.oldPhotos);
        } else {

          if (this.oldPhotos.length != 0) {
            this.currentIndex = ((this.currentIndex + 1) % (this.oldPhotos.length == 0 ? this.oldPhotos.length + 1 : this.oldPhotos.length));
            console.log(this.currentIndex, this.oldPhotos.length);
            console.log('mostrando fotos antigas ==>');
            this.dialogRef.componentInstance.data = {
              photos: [
                this.oldPhotos[this.currentIndex],
                this.oldPhotos[((this.currentIndex + 1) % (this.oldPhotos.length == 0 ? this.oldPhotos.length + 1 : this.oldPhotos.length))],
              ]
            };
          } else {
            this.dialogRef.componentInstance.data = {
              ...this.splash
            };
          }
        }
        console.log('photos in projetor ==> ', this.dialogRef.componentInstance.data.photos)
      }
    }, 5000)
  }



}
