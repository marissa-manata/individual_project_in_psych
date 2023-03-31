import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MembersComponent } from './members/members.component';
import { MemberDetailComponent } from './member-detail/member-detail.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { WorkComponent } from './work/work.component';
import { ResearchComponent } from './research/research.component';
import { ResearchDetailComponent } from './research-detail/research-detail.component';
import { ResourceComponent } from './resource/resource.component';
import { InvolvementComponent } from './involvement/involvement.component';


@NgModule({
  declarations: [
    AppComponent,
    MembersComponent,
    MemberDetailComponent,
    HomeComponent,
    WorkComponent,
    ResearchComponent,
    ResearchDetailComponent,
    ResourceComponent,
    InvolvementComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
