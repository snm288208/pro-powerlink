import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) { }
 
  getApi(url: string, params?: any): Observable<any> {
    const token =  this.getAuthenticationToken() 
    const headers = this.createHeaders(token);
    return this.http.get(url, { headers, params });
  }

  postApi(url: string, body: any): Observable<any> {
    const token = this.getAuthenticationToken()
    const headers = this.createHeaders(token);
    return this.http.post(url, body, { headers });
  }

  putApi(url: string, body: any): Observable<any> {
    const token = this.getAuthenticationToken();
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
  private setAuthenticationToken() {
     this.http.post('https://Sandboxapi.benzeen.com/api/Account/Authenticate',{"username":"guest@benzeenautoparts.com","password":"BenzeenAuto$Part"}).subscribe(
      {
        next: (data: any) => {
          if (data && data.token) {
            localStorage.setItem('jwtToken', data.token);
          } else {
            console.error('Token not found in response:', data);
          }
        },
        error: (error) => console.error('Error:', error),
        complete: () => console.info('Request complete')
      });
  }

  private getAuthenticationToken(){
    let token = '';
    if (typeof localStorage === 'undefined') {
    }

    token = localStorage.getItem('jwtToken') || '';
    if(token === '')
      {
        this.setAuthenticationToken();
        token = localStorage.getItem('jwtToken') || '';

      }
      

      console.log(token);
    
    return token? token : '';
    
  }
}
