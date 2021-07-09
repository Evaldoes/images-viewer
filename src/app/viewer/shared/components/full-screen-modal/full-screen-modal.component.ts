import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';


@Component({
  selector: 'app-full-screen-modal',
  templateUrl: './full-screen-modal.component.html',
  styleUrls: ['./full-screen-modal.component.scss']
})
export class FullScreenModalComponent implements OnInit {

  


  public modalIcons = {
    success: 'check_circle',
    info: 'error',
    warning: 'warning',
    danger: 'error'
  }

  constructor(
    @Inject(MAT_DIALOG_DATA) public data,
    private shellModalRef: MatDialogRef<FullScreenModalComponent>
  ) { 
    // data.type = 'info'
  }

  ngOnInit(): void {
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
