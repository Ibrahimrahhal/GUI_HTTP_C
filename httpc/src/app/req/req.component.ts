import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-req',
  templateUrl: './req.component.html',
  styleUrls: ['./req.component.css']
})

export class ReqComponent implements OnInit {
  getbtn:any =    {  'get':true,
                 'reqbtn':true,
                 'active':true };

  postbtn:any =   {  'post':true,
                 'reqbtn':true,
                 'active':false };
jsonbtn:any =    {  'get':true,
                 'reqbtn':true,
                  'active':true };

rawbtn:any =   {  'post':true,
              'reqbtn':true,
              'active':false };
  paras:number[]=[];
  headers:number[]=[];
  hh:number =0;
  ph:number=0;
  get:boolean = true;
  json:boolean = true;
  http:HttpClient;
  headers_obs:any;
  params_obs:any;

    constructor(httpp:HttpClient) {
      this.http = httpp;


   }


  ngOnInit() {
  }
addInput(x:boolean){
if(x == true){
this.ph++;
this.paras.push(this.ph);

} else {
  this.hh++;
  this.headers.push(this.hh);


}
}

setReq(x:boolean){
if(x == true){
this.get = true;
this.getbtn.active = true;
this.postbtn.active = false;
}else{

  this.get = false;
  this.postbtn.active = true;
  this.getbtn.active = false;


}
}
setBody(x:boolean){
if(x == true){
this.json = true;
this.jsonbtn.active = true;
this.rawbtn.active = false;
}else{

  this.json = false;
  this.rawbtn.active = true;
  this.jsonbtn.active = false;


}
}
sethap(){
let obj:any = "?";
for(var i =0 ;i < this.paras.length;i++ ){

let kclass= "pkey"+this.paras[i];
let vclass= "pvalue"+this.paras[i];
let kkey =document.getElementsByClassName(kclass)[0] as HTMLInputElement;
let kkkey = kkey.value;
let vvalue =document.getElementsByClassName(vclass)[0] as HTMLInputElement;
let vvvalue = vvalue.value;
if(kkkey=== "" || vvvalue ===""){}
else {
  if(i ===0){} else {obj+="&"};
  obj +=""+ kkkey +"=" +vvvalue;
}
}

this.params_obs = obj;
//
//
//
//
//




obj = "{";
for(var i =0 ;i < this.headers.length;i++ ){
  let  kclass= "hkey"+this.headers[i];
  let  vclass= "hvalue"+this.headers[i];
  let  kkey =document.getElementsByClassName(kclass)[0] as HTMLInputElement;
  let  kkkey = kkey.value;
  let  vvalue =document.getElementsByClassName(vclass)[0] as HTMLInputElement;
  let  vvvalue = vvalue.value;
if(kkkey=== "" || vvvalue ===""){}
else {
  obj += " "+"\"" +kkkey +"\"" +" : "+ "\"" + vvvalue + "\"";
  if(i ===0){} else {obj+=","};
}
}
obj+= "}";
this.headers_obs = new HttpHeaders(obj);

}

reqbtn(){
this.sethap();
  console.log(this.params_obs , this.headers_obs, this.http);
}

}
