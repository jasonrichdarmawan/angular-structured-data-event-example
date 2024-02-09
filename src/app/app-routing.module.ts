import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { routes as eventRoutes } from 'projects/features/event/src/app/app-routing.module'
import { routes as deviceTypeRoutes } from 'projects/features/device-type/src/app/app-routing.module';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'experiences',
  },
  {
    path: 'experiences',
    loadChildren: () => import("@features/experience/presentation/pages/experiences-page").then(m => m.ExperiencesPageModule),
  },
  {
    path: 'experience',
    loadChildren: () => import("@features/experience/presentation/pages/experience-page").then(m => m.ExperiencePageModule)
  },
  ...eventRoutes,
  ...deviceTypeRoutes,
  {
    path: 'subdomain',
    loadChildren: () => import("./features/subdomain/presentation/pages/subdomain/subdomain.module").then(m => m.SubdomainModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
