import { Component, OnInit } from '@angular/core';

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
  paras:number[]=[];
  headers:number[]=[];
  hh:number =0;
  ph:number=0;
    constructor() {


   }

  ngOnInit() {
  }
addInput(x:boolean){
if(x == true){
this.ph++;
this.paras.push(this.ph);

}else{
  this.hh++;
  this.headers.push(this.hh);


}


}
}
