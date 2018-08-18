import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ServersComponent } from './servers/servers.component';
import { S2Component } from './s2/s2.component';
import { S3Component } from './s3/s3.component';

@NgModule({
  declarations: [
    AppComponent,
    ServersComponent,
    S2Component,
    S3Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
