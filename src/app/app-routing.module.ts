import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { SpaceComponent } from './components/space/space.component';
import { SearchComponent } from './components/search/search.component';
import { ScheduleComponent } from './components/schedule/schedule.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { ImportComponent } from './components/import/import.component';
import { SmartWorkflowComponent } from './components/smart-workflow/smart-workflow.component';
import { ActivitySummaryComponent } from './components/activity-summary/activity-summary.component';
import { ReportDashboardComponent } from './components/report-dashboard/report-dashboard.component';
import { ExpenseEntryComponent } from './expense-entry/expense-entry.component'
import { ExpenseEntryListComponent } from './expense-entry-list/expense-entry-list.component';
import { ExpenseGuard } from './expense.guard';
import { AdministrationComponent } from './components/administration/administration.component';
import { Home1Component } from './home-1/home-1.component';
import { SetsComponent } from './components/sets/sets.component';
import { AddsetComponent } from './components/addset/addset.component';
import { SetlistComponent } from './components/sets/setlist/setlist.component';


const routes: Routes = [
  {
    path : '',
    pathMatch :'full',
    redirectTo :'login'
  },
  {
    path:'login',
    component:LoginComponent
    
  },
 
   { path: 'expenses', 
   component: ExpenseEntryListComponent,
    // canActivate: [ExpenseGuard]
  },
   { path: 'expenses/detail/:id', 
   component: ExpenseEntryComponent,
    // canActivate: [ExpenseGuard]
  },

  {
    path:'dashboard',
    component:DashboardComponent,
    // canActivate: [ExpenseGuard]
  },
  {
    path:'home_1',
    component:Home1Component,
    children:[ {
      path : '',
      pathMatch :'full',
      redirectTo :'home_1'
    },
    {
      path:'home',
      component:HomeComponent,
      // canActivate: [ExpenseGuard]
    },
    {
      path:'space',
      component:SpaceComponent,
      // canActivate: [ExpenseGuard]
    },
  {
    path:'search',
    component:SearchComponent,
    // canActivate: [ExpenseGuard]
  },
  {
    path:'schedule',
    component:ScheduleComponent,
    // canActivate: [ExpenseGuard]
  },
  {
    path:'tasks',
    component:TasksComponent,
    // canActivate: [ExpenseGuard]
  },
  {
    path:'import',
    component:ImportComponent,
    // canActivate: [ExpenseGuard]
  },
  {
    path:'smart-workflow',
    component:SmartWorkflowComponent,
    // canActivate: [ExpenseGuard]
  },
  {
    path:'activity-summary',
    component:ActivitySummaryComponent,
    // canActivate: [ExpenseGuard]
  },
  {
    path:'report-dashboard',
    component:ReportDashboardComponent,
    // canActivate: [ExpenseGuard]
  },
  {
    path:'administration',
    component:AdministrationComponent,
    // canActivate: [ExpenseGuard]
  },
{
  path:'set',
  component:SetsComponent
},
{
  path:'addset',
  component:AddsetComponent
},
{
  path:'setlist',
  component:SetlistComponent
}]
   
  },
  

  // {
  //   path:'home/space',
  //   component:SpaceComponent,
  //   // canActivate: [ExpenseGuard]
  // },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
