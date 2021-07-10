import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-full-screen-modal',
  templateUrl: './full-screen-modal.component.html',
  styleUrls: ['./full-screen-modal.component.scss']
})
export class FullScreenModalComponent implements OnInit {

  public allPhotos = [];



  constructor(
    @Inject(MAT_DIALOG_DATA) public data,
    private shellModalRef: MatDialogRef<FullScreenModalComponent>
  ) {
    // data.type = 'info'
  }

  ngOnInit(): void {

    // let elem = document.documentElement;
    // let methodToBeInvoked = elem.requestFullscreen ||
    //   elem?.webkitRequestFullScreen || elem['mozRequestFullscreen']
    //   ||
    //   elem['msRequestFullscreen'];
    // if (methodToBeInvoked) methodToBeInvoked.call(elem);

    //  if(this.data == undefined || this.data == null)
    //     this.data = {
    //       photos: [
    //       {
    //         url: `../../../../../../../assets/splash.png`,
    //         subject: '',
    //         code: ''
    //       },
    //       {
    //         url: null,
    //         subject: null,
    //         code: null
    //       }
    //     ]}
  }

  public cancel() {
    this.shellModalRef.close();
  }

  public close(value) {
    this.shellModalRef.close(value);
  }

  public sendResult(result) {
    this.close(result);
  }

  @HostListener("keydown.esc")
  public onEsc() {
    this.shellModalRef.close();
  }

}
