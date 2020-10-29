import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ErrorListComponent } from './error-list/error-list.component';
import { ButtonDirective } from './directives/button.directive';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ErrorListComponent,
    ButtonDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
