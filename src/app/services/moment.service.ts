import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Moment } from '../interfaces/Moment';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MomentService {

  private baseApiurl = environment.baseApiUrl;

  private apiUrl = `${this.baseApiurl}api/moments`;

  constructor(private http: HttpClient) { }

  createMoment(formData: FormData):Observable<FormData>{
    return this.http.post<FormData>(this.apiUrl, formData);
  }
}
