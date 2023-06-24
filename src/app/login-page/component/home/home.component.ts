import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { LoginServiceService } from '../../service/login-service.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  loggedIn=false;
  forgot=false;

  signobj:any={
    username:'',
    email:'',
    password:''
  }
  loginobj:any={
  username:'',
  password:''
  }
  createNew:any={
    newpassword:'',
    confirmpassword:''
  }

  constructor(private router: Router,
    private loginService:LoginServiceService) { }

  ngOnInit(): void {
    // const localData=localStorage.getItem('signLog');
    // console.log('qqq',localData);
    
    
    // if(localData!= null){
    //   this.signLog=JSON.parse(localData);
    // }
    // console.log('www',this.signLog);

  }



  // ifExist(){
  //   return this.signLog.some(m=> m.username==this.signobj.username );
  // }
  // ifExists(){
  //   return this.signLog.some(m=> m.email==this.signobj.email);
  // }
  // ifYes(){
  //   return !this.signobj.username || !this.signobj.password;
  // }

  signedIn(){
    // console.log('form value', formValue);
    // console.log('this.signobj', this.signobj);
    // if (!formValue.username || !formValue.email || !formValue.password) {
    //   alert('Please fill in all the details.');
    //   return;
    // }
    // if (this.ifExist()) {
    //   alert('Username already exists. Please choose a different username.');
    //   return;
    // }
    // if (this.ifExists()) {
    //   alert('Email already exists. Please choose a different email.');
    //   return;
    // }
    this.loginService.postDetails(this.signobj).subscribe((res:any)=>{
      if(res && res.success==true){
        this.router.navigate(['/about']);
      }else{
        alert('data already exist');
      }
    })

    // this.signLog.push(formValue);
   
  }

  loginedIn(){
    // if (!this.loginobj.username || !this.loginobj.password) {
    //   alert('Please fill in all the details.');
    //   return;
    // }
    // const existUser=this.signLog.find(m=> m.username==this.loginobj.username && m.password==this.loginobj.password);
    // console.log(existUser);
    // console.log('form ', formValue);
    // console.log('this.obj', this.loginobj);
    // if(existUser != undefined){
      this.loginService.loginDetails(this.loginobj).subscribe((res:any)=>{
        if(res){
          this.router.navigate(['/about']);
        console.log('resss',res);
        }else{
          alert('data not exist ! sign up');
        }
      });
  //   }else{
  //     alert('Account not found');
  //   }
   
 
  //   }
  }
  
  createPassword(){
    this.loginService.setNewPass(this.createNew).subscribe((res:any)=>{
      console.log('resValue',res);
      
      })
    }
  

}
