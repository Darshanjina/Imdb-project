import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  env=environment;
  id:any="";
  constructor(private h:HttpClient,private r:Router) { }

  funGet(method){
    return this.h.get(this.env.apiurl+method+this.env.apikey)
    .toPromise()
    .then(res=>{
      return res;
    })
    .catch(err=>{
      console.log('Error:'+err);
    })
  }


  setID(x){
    this.id=x;
  }

  getID(){
    return this.h.get(this.env.apiurl+'/movie/'+this.id+this.env.apikey)
    .toPromise()
    .then(res=>{
      return res;
    })
    .catch(err=>{
      console.log('Error:'+err);
    })
  }
}
