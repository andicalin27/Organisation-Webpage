import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { OrganisationInContextsComponent } from './pages/organisation-in-contexts/organisation-in-contexts.component';
import { EssenceofOrganisationComponent } from './pages/essenceof-organisation/essenceof-organisation.component';
import { CreativeExpressionsOrganisationComponent } from './pages/creative-expressions-organisation/creative-expressions-organisation.component';

export const routes: Routes = [
  {
    path: '',component: HomeComponent
  },
  {
     path:'organisation-context',component:OrganisationInContextsComponent
  },
  {
    path:'essence-organisation',component:EssenceofOrganisationComponent
  },
  {
    path:'creative-expressions',component:CreativeExpressionsOrganisationComponent
  }
];
