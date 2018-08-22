import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from "@angular/common";

import { AppComponent } from './app.component';
import { ServersComponent } from './servers/servers.component';
import { S2Component } from './s2/s2.component';
import { S3Component } from './s3/s3.component';
import { ServerComponent } from './servers/server/server.component';
import { Assignment3Component } from './assignment3/assignment3.component';


@NgModule({
  declarations: [
    AppComponent,
    ServersComponent,
    S2Component,
    S3Component,
    ServerComponent,
    Assignment3Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
