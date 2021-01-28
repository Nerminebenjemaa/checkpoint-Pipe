import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PipeExampleComponent } from './pipe-example/pipe-example.component';
import { ReversePipe } from './pipes/reverse.pipe';
import { DefaultImagePipe } from './default-image.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PipeExampleComponent,
    ReversePipe,
    DefaultImagePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
