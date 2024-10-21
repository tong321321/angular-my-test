import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';  
import { BackendService } from './backend.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { TemplateDrivenFormEx1Component } from './template-driven-form-ex1/template-driven-form-ex1.component';
import { CounterInputComponent } from './counter-input/counter-input.component';
import { CounterInput2Component } from './counter-input2/counter-input2.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent,
    ContactDetailComponent,
    TemplateDrivenFormEx1Component,
    CounterInputComponent,
    CounterInput2Component
  ],
  imports: [
    HttpClientModule,BrowserModule,
    InMemoryWebApiModule.forRoot(BackendService),
    AppRoutingModule,    
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
