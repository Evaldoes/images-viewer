import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { NbMenuItem, NbSidebarService } from '@nebular/theme';
import { FullScreenModalComponent } from './viewer/shared/components/full-screen-modal/full-screen-modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public dialogRef: MatDialogRef<FullScreenModalComponent>
  title = 'images-viewer';
  numbers = 0;


  items: NbMenuItem[] = [
    {
      title: 'Profile',
      icon: 'person-outline',
    },
    {
      title: 'Change Password',
      icon: 'lock-outline',
    },
    {
      title: 'Privacy Policy',
      icon: { icon: 'checkmark-outline', pack: 'eva' },
    },
    {
      title: 'Logout',
      icon: 'unlock-outline',
    },
  ];


  constructor(private sidebarService: NbSidebarService,
    private modalViewer: MatDialog) {
  }

  toggleCompact() {
    this.sidebarService.toggle(true, 'left');
  }


  // observable = Observable.interval(1500);

  // subscription = this.observable.subscribe(value => {

  // });



  fullScreen() {

    // let elem = document.documentElement;
    // let methodToBeInvoked = elem.requestFullscreen ||
    //   elem?.webkitRequestFullScreen || elem['mozRequestFullscreen']
    //   ||
    //   elem['msRequestFullscreen'];
    // if (methodToBeInvoked) methodToBeInvoked.call(elem);
    this.dialogRef = this.modalViewer.open(FullScreenModalComponent, {
     
      data: { urls: ['https://www.pousadadossonhos.com.br/wp-content/uploads/2018/01/150901-saiba-como-organizar-um-casamento-ao-por-do-sol.jpg'] }
    });

    setInterval(() => {
      if (this.dialogRef && this.dialogRef.componentInstance) {
        console.log('entrou aqui',this.dialogRef.componentInstance)
        this.dialogRef.componentInstance.data = { numbers: this.dialogRef.componentInstance.data.numbers + 1 };
      }
    }, 1000)
  }


}
