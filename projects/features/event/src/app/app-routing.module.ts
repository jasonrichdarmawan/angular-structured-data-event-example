import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'event/1',
    pathMatch: 'full',
  },
  {
    path: 'event',
    loadChildren: () => import("./features/event-feature/event-feature.module").then(m => m.EventFeatureModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
