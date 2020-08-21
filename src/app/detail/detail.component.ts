import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
item:any={};
imgurl="https://image.tmdb.org/t/p/w400";
loading:boolean=false;
  constructor(private d:DataService,private r:Router) { }

  ngOnInit() {
    this.funGetDetails();
  }

  funGetDetails(){
    const that=this;
    this.loading=true;
    this.d.getID().then(res=>{
      that.loading=false;
      that.item=res;
    })
  }

  
  funBack(){
    this.r.navigateByUrl('');
  }
}
