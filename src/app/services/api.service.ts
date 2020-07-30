import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
const url = "https://admin.chalopadhe.com/";
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private _httpServices: HttpClient) { }
  public getData(str:string) {
    return this._httpServices.get("./assets/data/"+str+".json");
}
  SuscribeEmail(emailid: string) {
    var pstData = new HttpParams();
    pstData = pstData.append("email", emailid);
    return this._httpServices.post(url + "contact/aer/", pstData).pipe(
      catchError(this.handleError)
    );
  }
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };
}
