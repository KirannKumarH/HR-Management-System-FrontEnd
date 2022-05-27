import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HrComponent } from './hr/hr.component';
import { CandidateComponent } from './candidate/candidate.component';
import { ShowCanComponent } from './candidate/show-can/show-can.component';
import { AddEditCanComponent } from './candidate/add-edit-can/add-edit-can.component';
import { ShowHrComponent } from './hr/show-hr/show-hr.component';
import { AddEditHrComponent } from './hr/add-edit-hr/add-edit-hr.component';
import { SharedService } from './shared.service';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    HrComponent,
    CandidateComponent,
    ShowCanComponent,
    AddEditCanComponent,
    ShowHrComponent,
    AddEditHrComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule
  
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
