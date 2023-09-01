import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component'; 
import { ViewVideoIdComponent } from './pages/video/view-video-id/view-video-id.component';
import { ViewVideosComponent } from './pages/video/view-videos/view-videos.component';
import { ViewTemplatesComponent } from './pages/template/view-templates/view-templates.component';
import { ViewTemplateIdComponent } from './pages/template/view-template-id/view-template-id.component';
import { EditVideoComponent } from './forms/videos/edit-video/edit-video.component';
import { EditTemplateComponent } from './forms/template/edit-template/edit-template.component';
import { MultiEditVideosComponent } from './forms/videos/multi-edit-videos/multi-edit-videos.component';
import { NewTemplateComponent } from './forms/template/new-template/new-template.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './forms/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    DashboardComponent, 
    ViewVideoIdComponent,
    ViewVideosComponent,
    ViewTemplatesComponent,
    ViewTemplateIdComponent,
    EditVideoComponent,
    EditTemplateComponent,
    MultiEditVideosComponent,
    NewTemplateComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
