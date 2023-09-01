import {
  NgModule
} from '@angular/core';
import {
  RouterModule,
  Routes
} from '@angular/router';
import {
  DashboardComponent
} from './dashboard/dashboard.component';
import {
  ViewVideosComponent
} from './pages/video/view-videos/view-videos.component';
import {
  ViewVideoIdComponent
} from './pages/video/view-video-id/view-video-id.component';
import {
  ViewTemplatesComponent
} from './pages/template/view-templates/view-templates.component';
import {
  ViewTemplateIdComponent
} from './pages/template/view-template-id/view-template-id.component';
import { EditTemplateComponent } from './forms/template/edit-template/edit-template.component';
import { NewTemplateComponent } from './forms/template/new-template/new-template.component';
import { EditVideoComponent } from './forms/videos/edit-video/edit-video.component';
import { MultiEditVideosComponent } from './forms/videos/multi-edit-videos/multi-edit-videos.component';
import { LoginComponent } from './forms/login/login.component';

const routes: Routes = [{
  path: '',
  component: DashboardComponent,
  children: [{
      path: 'videos',
      component: DashboardComponent,
      children: [{
          path: '',
          component: ViewVideosComponent,
        },
        {
          path: 'video/:id',
          component: ViewVideoIdComponent,
        },
        {
          path: 'edit/:id',
          component: EditVideoComponent,
        },
        {
          path: 'video/multi/edit/:id',
          component: MultiEditVideosComponent,
        }
      ]
    },
    {
      path: 'templates',
      component: DashboardComponent,
      children: [{
          path: '',
          component: ViewTemplatesComponent,
        },
        {
          path: 'template/:id',
          component: ViewTemplateIdComponent,
        },
        {
          path: 'template/new',
          component: NewTemplateComponent,
        },
        {
          path: 'template/edit/:id',
          component:EditTemplateComponent ,
        }
      ]
    },{
      path: '',
      redirectTo: 'videos' ,
pathMatch:'full'

    } ]
},{
  path: 'login',
  component:LoginComponent ,
},{
path:"**",
redirectTo: 'login',
pathMatch:'full'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
