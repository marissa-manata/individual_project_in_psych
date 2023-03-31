import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MembersComponent } from './members/members.component';
import { HomeComponent } from './home/home.component';
import { MemberDetailComponent } from './member-detail/member-detail.component';
import { WorkComponent } from './work/work.component';
import { ResearchComponent } from './research/research.component';
import { ResearchDetailComponent } from './research-detail/research-detail.component';
import { ResourceComponent } from './resource/resource.component';
import { InvolvementComponent } from './involvement/involvement.component';

const routes: Routes = [
  { path: '', redirectTo: '/mission', pathMatch: 'full' },
  { path: 'mission', component: HomeComponent },
  { path: 'detail/:name', component: MemberDetailComponent },
  { path: 'members', component: MembersComponent },
  { path: 'work', component: WorkComponent },
  { path: 'research', component: ResearchComponent },
  { path: 'research/:code', component: ResearchDetailComponent },
  { path: 'resource', component: ResourceComponent },
  { path: 'involvement', component: InvolvementComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
