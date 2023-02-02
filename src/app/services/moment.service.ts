import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Moment } from '../interfaces/Moment';
import { environment } from 'src/environments/environment';

import { Response } from '../interfaces/Response';

@Injectable({
  providedIn: 'root'
})
export class MomentService {

  private baseApiurl = environment.baseApiUrl;

  private apiUrl = `${this.baseApiurl}api/moments`;

  constructor(private http: HttpClient) { }


  /* Pegar os dados do sistema */

  getMoments(): Observable<Response<Moment[]>>{
    return this.http.get<Response<Moment[]>>(this.apiUrl);
  }

  getMoment(id:number):Observable<Response<Moment>>{
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Response<Moment>>(url);
  }


  createMoment(formData: FormData):Observable<FormData>{
    return this.http.post<FormData>(this.apiUrl, formData);
  }

  removeMoment(id: number){
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url);
  }
}
