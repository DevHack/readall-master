import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddBookComponent } from './components/add-book/add-book.component';
import { AuthorDashboardComponent } from './components/author-dashboard/author-dashboard.component';
import { BookshelfComponent } from './components/bookshelf/bookshelf.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LandingComponent } from './components/landing/landing.component';
import { LoginComponent } from './components/login/login.component';
import { PubDashboardComponent } from './components/pub-dashboard/pub-dashboard.component';
import { ReaderDashboardComponent } from './components/reader-dashboard/reader-dashboard.component';

const routes: Routes = [{
  'path' : '',
  'component' : LandingComponent
},{
  'path' : 'landing',
  'component' : LandingComponent
},{
  'path' : 'login',
  'component' : LoginComponent
},{
  'path' : 'callback',
  'component' : DashboardComponent
},{
  'path' : 'pub',
  'component' : PubDashboardComponent
},{
  'path' : 'auth',
  'component' : AuthorDashboardComponent
},{
  'path' : 'read',
  'component' : ReaderDashboardComponent
},{
  'path' : 'bookshelf',
  'component' : BookshelfComponent
},{
  'path' : 'addbook',
  'component' : AddBookComponent
},{
  'path' : '**',
  'redirectTo' : ''
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
