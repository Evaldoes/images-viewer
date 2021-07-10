import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewerRoutingModule } from './viewer-routing.module';
import { ViewerComponent } from './viewer.component';
import { HomeComponent } from './home/home.component';
import { NbButtonModule, NbCardModule, NbCheckboxModule, NbIconModule, NbLayoutModule, NbTooltipModule } from '@nebular/theme';
import { FullScreenModalComponent } from './shared/components/full-screen-modal/full-screen-modal.component';
import {  MatDialogModule} from '@angular/material/dialog';
import {  MatIconModule} from '@angular/material/icon';
import { PhotosService } from './shared/services/photos.service';


@NgModule({
  declarations: [ViewerComponent, HomeComponent, FullScreenModalComponent],
  imports: [
    CommonModule,
    ViewerRoutingModule,
    NbCardModule,
    NbIconModule,
    NbTooltipModule,
    NbButtonModule,
    NbLayoutModule,
    NbCheckboxModule,
    MatDialogModule,
    MatIconModule
  ],
  providers:[
    // PhotosService
  ]
})
export class ViewerModule { }
