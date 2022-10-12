import { Injectable } from '@angular/core';
import { Idept } from './idept';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeptService {

  url = 'http://localhost:8784/api/dept/';
  httpOptions = { headers: new HttpHeaders({'Content-type':'application/json'}) }

  constructor(private httpclient:HttpClient) { }

  getDeptList(): Observable<any> {
    return this.httpclient.get<any[]>(this.url + 'ListDept');
  }

  getDept(id:number):Observable<Idept> {
    return this.httpclient.get<Idept>(this.url + 'ListDept/' + id).pipe(catchError(this.handleError));
  }

  addDept(dept:Idept):Observable<Idept> {
    return this.httpclient.post<Idept>(this.url + "AddDept", dept, this.httpOptions).pipe(catchError(this.handleError));
  }

  editDept(dept:Idept):Observable<Idept> {
    return this.httpclient.put<Idept>(this.url + "EditDept/" + dept.id, dept, this.httpOptions).pipe(catchError(this.handleError))
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    errorMessage = error.status + '\n' + error.statusText + '\n' + error.error;
    alert(errorMessage);
    return throwError(errorMessage);
  }
}
