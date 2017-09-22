import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { WebLoaderService } from './web-loader.service';
import { SubjectTesterComponent } from './subject-tester/subject-tester.component';

@NgModule({
  declarations: [
    AppComponent,
    SubjectTesterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
      WebLoaderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
