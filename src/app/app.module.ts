import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/pages/home/home.component';
import { CommentsComponent } from './components/pages/comments/comments.component';
import { NotfoundComponent } from './components/pages/notfound/notfound.component';
import { ErrorComponent } from './components/pages/error/error.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { TheoryComponent } from './components/pages/theory/theory.component';
import { BloqtextComponent } from './components/shared/bloqtext/bloqtext.component';
import { BlockplusComponent } from './components/shared/blockplus/blockplus.component';
import { BlurbComponent } from './components/shared/blurb/blurb.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { BacktotopComponent } from './components/shared/backtotop/backtotop.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CommentsComponent,
    NotfoundComponent,
    ErrorComponent,
    NavbarComponent,
    TheoryComponent,
    BloqtextComponent,
    BlockplusComponent,
    BlurbComponent,
    FooterComponent,
    BacktotopComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
