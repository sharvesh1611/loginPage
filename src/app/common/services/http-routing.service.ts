import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpRoutingService {

  constructor(private httpClient:HttpClient) { }

  postMethod(url?:any,data?:any){
    console.log('check');
    return this.httpClient.post(url,data);
    }
  loginMethod(url?:any,data?:any){
    return this.httpClient.post(url,data);
  }
  passMethod(url?:any,data?:any){
    return this.httpClient.post(url,data);
  }
}
