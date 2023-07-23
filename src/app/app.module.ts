import { UserService } from './user.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent, AuthenticatedComponent, NonAuthenticatedComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent, AuthenticatedComponent, NonAuthenticatedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
