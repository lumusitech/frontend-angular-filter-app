import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WritersComponent } from './components/writers/writers.component';
import { WriterInfoComponent } from './components/writer-info/writer-info.component';

@NgModule({
  declarations: [
    AppComponent,
    WritersComponent,
    WriterInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
