import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, map } from 'rxjs';
import { AbstractControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly APIUrl = "https://localhost:44354/api";
  readonly ResumeUrl = "http://localhost:44354/Resume";


  constructor(private http: HttpClient) { }


  validateUsernameNotTaken(control: AbstractControl) {
    return this.checkUsernameNotTaken(control.value).pipe(
      map(res => {
        return res ? null : { usernameTaken: true };
      })
    );
  }


  checkUsernameNotTaken(HR_EMAIL: string): Observable<boolean> {
    return this.http.get("https://localhost:44354/api/HR/email").pipe(
      map((HR_EMAIL_List: Array<any>) =>
        HR_EMAIL_List.filter(user => user.HR_EMAIL === HR_EMAIL)
      ),
      map(users => !users.length)
    );
  }


  getCanList(): Observable<any[]> {
    return this.http.get<any>(this.APIUrl + '/candidate');
  }


  addCandidate(val: any) {
    return this.http.post(this.APIUrl + '/Candidate', val);
  }


  updateCandidate(val: any) {
    return this.http.put(this.APIUrl + '/Candidate', val);
  }


  deleteCandidate(val: any) {
    return this.http.delete(this.APIUrl + '/Candidate/' + val);
  }

  getHrList(): Observable<any[]> {
    return this.http.get<any>(this.APIUrl + '/hr');
  }


  addHr(val: any) {
    return this.http.post(this.APIUrl + '/Hr', val);
  }


  updateHr(val: any) {
    return this.http.put(this.APIUrl + '/Hr', val);
  }


  deleteHr(val: any) {
    return this.http.delete(this.APIUrl + '/Hr/' + val);
  }

  UploadResume(val: any) {
    return this.http.post(this.APIUrl + '/CANDIDATE/SAVERESUME', val);
  }

  DownloadResume(val: any) {

    return this.http.get(this.APIUrl + '/CANDIDATE/DOWNLOAD/' + val);
  }

  ViewResume(val: any) {

    return this.http.get(this.APIUrl + '/CANDIDATE/VIEW/' + val);
  }

  getAllSource(): Observable<any[]> {
    return this.http.get<any[]>(this.APIUrl + '/CANDIDATE/SOURCE');
  }

  getAllStatus(): Observable<any[]> {
    return this.http.get<any[]>(this.APIUrl + '/CANDIDATE/STATUS');
  }

  getAllEmail(): Observable<any[]> {
    return this.http.get<any[]>(this.APIUrl + '/CANDIDATE/EMAIL');
  }


}
