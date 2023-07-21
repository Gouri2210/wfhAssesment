import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotificationDirective } from './notification.directive';
import { APIDataComponent } from './comp/apidata/apidata.component';
import { ChildComponent } from './comp/child/child.component';
import { ParentComponent } from './comp/parent/parent.component';
import { DataService } from './MyService/data.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NotificationDirective,
    APIDataComponent,
    ChildComponent,
    ParentComponent,
  
    
    
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
