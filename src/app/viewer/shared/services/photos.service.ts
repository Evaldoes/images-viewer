import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {
  private api = environment.API_URL;

  constructor(private http: HttpClient) {}

  getAllPhotos():Observable<any>{
    return this.http
      .get(this.api)
      .pipe(catchError(this.handleError), map(this.jsonDataToAny));
  }


  deletePhoto(){
    return this.http
      .delete(this.api,{})
      .pipe(catchError(this.handleError), map(this.jsonDataToAny));
  }

  private jsonDataToAny(jsonData: any) {
    return jsonData as any;
  }

  private handleError(error: any): Observable<any> {
    return throwError(error);
  }

}
