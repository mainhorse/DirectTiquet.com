import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home/home.component';
import { SearchNavComponent } from './home/search-nav/search-nav.component';
import { NetworksSocialsComponent } from './home/networks-socials/networks-socials.component';
import { SelectOptionsComponent } from './home/select-options/select-options.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchNavComponent,
    NetworksSocialsComponent,
    SelectOptionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
