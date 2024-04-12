import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FirstPartComponent } from './components/first-part/first-part.component';
import { SecondPartComponent } from './components/second-part/second-part.component';
import { ThirdPartComponent } from './components/third-part/third-part.component';
import { FourthPartComponent } from './components/fourth-part/fourth-part.component';
import { FifthPartComponent } from './components/fifth-part/fifth-part.component';
import { SixthPartComponent } from './components/sixth-part/sixth-part.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    FirstPartComponent,
    SecondPartComponent,
    ThirdPartComponent,
    FourthPartComponent,
    FifthPartComponent,
    SixthPartComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
