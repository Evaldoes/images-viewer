import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { Photo } from '../models/photos';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {
  private api = `${environment.API_URL}/wedding/photos`;

  constructor(private http: HttpClient) {}

  getAllPhotos():Observable<Photo[]>{
    return this.http
      .get(this.api)
      .pipe(catchError(this.handleError), map(this.jsonDataToPhotos));
  }


  deletePhoto(id: number){
    var url = `${this.api}/${id}`
    return this.http
      .delete(url,{})
      .pipe(catchError(this.handleError), map(this.jsonDataToAny));
  }

  private jsonDataToAny(jsonData: any) {
    return jsonData as any;
  }

  private handleError(error: any): Observable<any> {
    return throwError(error);
  }

   private jsonDataToPhotos(jsonData: any): Photo[]{
    const photos: Photo[] = [];
    jsonData.forEach(element => photos.push(element as Photo));
    return photos;
  }

}
