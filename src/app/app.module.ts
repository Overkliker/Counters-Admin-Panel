import {Inject, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components-navigation/navbar/navbar.component';
import { ErrorComponent } from './components-navigation/error/error.component';
import {CountersRoutingModule} from "./counters/counters-routing.module";
import {NgOptimizedImage} from "@angular/common";
import { HttpClientModule } from '@angular/common/http';
import { GraphQLModule } from './graphql.module';
import {HttpLink} from "apollo-angular/http";
import {InMemoryCache} from "@apollo/client/core";
import {APOLLO_OPTIONS} from "apollo-angular";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CountersRoutingModule,
    NgOptimizedImage,
    HttpClientModule,
    GraphQLModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  bootstrap: [AppComponent],
  providers: []
})
export class AppModule {
}
