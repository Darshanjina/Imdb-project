import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toprated',
  templateUrl: './toprated.component.html',
  styleUrls: ['./toprated.component.css']
})
export class TopratedComponent implements OnInit {
  list:any=[];
  imgurl="https://image.tmdb.org/t/p/w300";
  loading:boolean=false;
    constructor(private d:DataService,private r:Router) { }
  
    ngOnInit() {
      const method="/movie/top_rated"
      const that=this;
      this.loading=true;
      this.d.funGet(method).then(res=>{
        that.loading=false;
        that.list=res['results'];
        // console.log(that.list);
      })
    }

    funSet(x){
      this.d.setID(x);
      this.r.navigateByUrl('details');
    }

}
