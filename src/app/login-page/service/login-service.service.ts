import { Injectable } from '@angular/core';
import { HttpRoutingService } from 'src/app/common/services/http-routing.service';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(private httpService:HttpRoutingService) { }

  postDetails(body:any){
    return this.httpService.postMethod('http://localhost:5000/sign/data',body)
  }
  
  loginDetails(body:any){
    return this.httpService.loginMethod('http://localhost:5000/sign/data1',body)
  }
  setNewPass(body:any){
    return this.httpService.passMethod('http://localhost:5000/sign/data2',body)
  }
}
