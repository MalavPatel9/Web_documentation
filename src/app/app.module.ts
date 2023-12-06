import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule} from "@angular/material/form-field";
import { MatCardModule } from '@angular/material/card';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button'
import { TextboxComponent } from './shared/components/textbox/textbox.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatTabsModule} from '@angular/material/tabs';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import { HomeComponent } from './components/home/home.component';
import { SpaceComponent } from './components/space/space.component';
import { SearchComponent } from './components/search/search.component';
import { ScheduleComponent } from './components/schedule/schedule.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { ImportComponent } from './components/import/import.component';
import { SmartWorkflowComponent } from './components/smart-workflow/smart-workflow.component';
import { ActivitySummaryComponent } from './components/activity-summary/activity-summary.component';
import { ReportDashboardComponent } from './components/report-dashboard/report-dashboard.component';
import { ExpenseGuard } from './expense.guard';
import { ExpenseEntryComponent } from './expense-entry/expense-entry.component';
import { ExpenseEntryListComponent } from './expense-entry-list/expense-entry-list.component';
import { AdministrationComponent } from './components/administration/administration.component';
import { DxButtonModule } from 'devextreme-angular';
import { DxChartModule } from 'devextreme-angular';
import { ChartBarComponent } from './charts/chart-bar/chart-bar.component';
import { Home1Component } from './home-1/home-1.component';
import { SplineComponent } from './spline/spline.component';
import { DxPieChartModule } from 'devextreme-angular';
import { AddsetComponent } from './components/addset/addset.component';
import { SetlistComponent } from './components/sets/setlist/setlist.component';
import { SetsComponent } from './components/sets/sets.component';
import {MatExpansionModule} from '@angular/material/expansion';






@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TextboxComponent,
    DashboardComponent,
    HomeComponent,
    SpaceComponent,
    SearchComponent,
    ScheduleComponent,
    TasksComponent,
    ImportComponent,
    SmartWorkflowComponent,
    ActivitySummaryComponent,
    ReportDashboardComponent,
    ExpenseEntryComponent,
    ExpenseEntryListComponent,
    AdministrationComponent,
    ChartBarComponent,
    Home1Component,
    SplineComponent,
    AddsetComponent,
    SetlistComponent,
    SetsComponent
    
   
    
    


    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatButtonToggleModule,
    MatTabsModule,
    MatRadioModule,
    MatSelectModule,
    MatInputModule,
    MatToolbarModule,
    MatSidenavModule,
    DxButtonModule,
    DxChartModule,
    DxPieChartModule,
    MatExpansionModule
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
