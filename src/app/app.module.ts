import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ToDoComponent } from './to-do/to-do.component';
import { FooterComponent } from './footer/footer.component';
import { ToDoDetailComponent } from './to-do/to-do-detail/to-do-detail.component';


import { DataService } from './data.service';
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactUsComponent,
    ToDoComponent,
    FooterComponent,
    ToDoDetailComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
