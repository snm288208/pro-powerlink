import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) { }

  getApi(url: string, token?: string, params?: any): Observable<any> {
    token =  this.getAuthenticationToken() 
    const headers = this.createHeaders(token);
    return this.http.get(url, { headers, params });
  }

  postApi(url: string, body: any, token?: string): Observable<any> {
    const headers = this.createHeaders(token);
    return this.http.post(url, body, { headers });
  }

  putApi(url: string, body: any, token?: string): Observable<any> {
    const headers = this.createHeaders(token);
    return this.http.put(url, body, { headers });
  }

  // You can define other API call functions here (e.g., DELETE)

  private createHeaders(token?: string): HttpHeaders {
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    if (token) {
      headers = headers.append('Authorization', `Bearer ${token}`);
    }
    return headers;
  }

  private getAuthenticationToken (): any {
    return  this.http.post('https://Sandboxapi.benzeen.com/api/Account/Authenticate',{"username":"guest@benzeenautoparts.com","password":"BenzeenAuto$Part"})
  }
}
