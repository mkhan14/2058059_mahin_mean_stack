import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Contact } from '../contact';

@Component({
  selector: 'app-login-registration-portfolio',
  templateUrl: './login-registration-portfolio.component.html',
  styleUrls: ['./login-registration-portfolio.component.css']
})
export class LoginRegistrationPortfolioComponent implements OnInit {
  loginRef = new FormGroup({
    user:new FormControl("",[Validators.required]),
    pass:new FormControl("",[Validators.required])
  })

  regRef = new FormGroup({
    first:new FormControl("",[Validators.required]),
    last:new FormControl("",[Validators.required]),
    user:new FormControl("",[Validators.required]),
    pass:new FormControl("",[Validators.required])
  })

  conRef = new FormGroup({
    name:new FormControl("",[Validators.required]),
    phone:new FormControl("",[Validators.required])
  })

  regUser:string="";
  regPass:string="";
  welcome:string="";
  msg:string="";
  regMsg:string="";
  showReg:boolean=false;
  showSignin:boolean=true;
  showPortfolio:boolean=false;

  contacts:Array<Contact>=new Array();

  constructor() { }

  ngOnInit(): void {
  }

  checkUser(){
    let login = this.loginRef.value;
    let reg=this.regRef.value;

    if(login.user==reg.user && login.pass==reg.pass){
      this.toggle("port");
      this.welcome=this.loginRef.value.user;
    }else{
      this.msg = "failure try once again";
    }
    this.loginRef.reset();
  }

  toggle(mode:string){
    if(mode == "reg"){
      this.showReg=true;
      this.showSignin=false;
    }else if(mode=="signin"){
      this.showReg=false;
      this.showSignin=true;
    }else if(mode=="port"){
      this.showPortfolio=true;
      this.showSignin=false;
    }
  }

  saveContactDetails(name:any,phone:any){
    let conDet=new Contact(name,phone);
    this.contacts.push(conDet);
  }

  registerMsg(){
    this.regMsg="Registered!";
  }

}
