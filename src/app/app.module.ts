import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './components/landing/landing.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ReadallHeaderComponent } from './components/readall-header/readall-header.component';
import { PubDashboardComponent } from './components/pub-dashboard/pub-dashboard.component';
import { AuthorDashboardComponent } from './components/author-dashboard/author-dashboard.component';
import { ReaderDashboardComponent } from './components/reader-dashboard/reader-dashboard.component';
import { AnalyticsBoardComponent } from './components/analytics-board/analytics-board.component';
import { BookshelfComponent } from './components/bookshelf/bookshelf.component';
import { AddBookComponent } from './components/add-book/add-book.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    LoginComponent,
    DashboardComponent,
    ReadallHeaderComponent,
    PubDashboardComponent,
    AuthorDashboardComponent,
    ReaderDashboardComponent,
    AnalyticsBoardComponent,
    BookshelfComponent,
    AddBookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
