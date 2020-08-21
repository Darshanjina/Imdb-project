import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { TrendingComponent } from './trending/trending.component';
import{HttpClientModule} from '@angular/common/http';
import { UpcomingComponent } from './upcoming/upcoming.component';
import { TopratedComponent } from './toprated/toprated.component';
import { PopularComponent } from './popular/popular.component';
import { DetailComponent } from './detail/detail.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    TrendingComponent,
    UpcomingComponent,
    TopratedComponent,
    PopularComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
