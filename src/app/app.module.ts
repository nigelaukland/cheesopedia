import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CheeseListComponent } from './cheeses/cheese-list/cheese-list.component';
import { CheesesComponent } from './cheeses/cheeses.component';
import { HeaderComponent } from './header/header.component';
import { CheeseDetailComponent } from './cheeses/cheese-detail/cheese-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    CheeseListComponent,
    CheesesComponent,
    HeaderComponent,
    CheeseDetailComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
