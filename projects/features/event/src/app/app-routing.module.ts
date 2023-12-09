import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'events',
  },
  {
    path: 'events',
    loadChildren: () => import("./features/events-feature/events-feature.module").then(m => m.EventsFeatureModule),
  },
  {
    path: 'event',
    loadChildren: () => import("./features/event-feature/event-feature.module").then(m => m.EventFeatureModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
