import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { AppComponent } from './app.component';
// import { GlobalHeader } from './app.header';
import { PageHome }    from './app.home';
import { PageAbout }    from './app.about';
import { PageDetail }    from './app.detail';
import { ArrowComponent }    from './app.arrow';
// import { CurrencyService }    from './app.currencyService';
import { routing }        from './app.routing';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PageHome,
    PageDetail,
    PageAbout,
    ArrowComponent,
    // CurrencyService
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
