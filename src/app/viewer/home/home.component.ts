import { Component, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { Photo } from '../shared/models/photos';
import { PhotosService } from '../shared/services/photos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy, OnChanges {
  public currentTheme: string = 'dark';

  links = [
    {
      url: 'https://www.linkedin.com/in/evaldo-cardoso-15a620125/',
      icon: 'linkedin',
      label: 'Linkedin',
    },
    {
      url: 'https://github.com/Evaldoes',
      icon: 'github',
      label: 'Github',
    },
    {
      url: 'https://gitlab.com/Evaldoes',
      icon: 'linkedin',
      label: 'Gitlab',
    },
  ]

  public photos: Photo[] = [];

  constructor(
    private themeService: NbThemeService,
    private photosServive: PhotosService
  ) {
    this.getCurrentTheme();
  }

  ngOnInit(): void {
    this.getPhotos();
  }

  ngOnDestroy(): void {
  }

  ngOnChanges(): void {
  }


  getCurrentTheme() {
    this.themeService.onThemeChange()
      .subscribe((theme: any) => {
        this.currentTheme = theme.name;
        // console.log(`Theme changed to ${theme.name}`);
      });
  }

  changeTheme() {
    if (this.currentTheme == 'dark') {
      this.themeService.changeTheme('corporate');
    } else {
      this.themeService.changeTheme('dark');
    }
  }

  getPhotos() {
    this.photosServive.getAllPhotos()
      .pipe()
      .subscribe(
        ans => {

          this.photos = [...ans];
          console.log(this.photos);

        },
        error => {
          console.log(error);

        }
      )
  }

  deletePhoto(id){
    this.photosServive.deletePhoto(id)
    .pipe()
    .subscribe(
      ans => {

        this.getPhotos();
        // this.photos = [...ans];
        console.log(ans);

      },
      error => {
        console.log(error);

      }
    )
  }



}
