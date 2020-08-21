import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TrendingComponent } from './trending/trending.component';
import { PopularComponent } from './popular/popular.component';
import { TopratedComponent } from './toprated/toprated.component';
import { UpcomingComponent } from './upcoming/upcoming.component';
import { DetailComponent } from './detail/detail.component';


const routes: Routes = [
  {path:"trending",component:TrendingComponent},
  {path:"popular",component:PopularComponent},
  {path:"toprated",component:TopratedComponent},
  {path:"upcoming",component:UpcomingComponent},
  {path:'details',component:DetailComponent},
  {path:'',component:TopratedComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
