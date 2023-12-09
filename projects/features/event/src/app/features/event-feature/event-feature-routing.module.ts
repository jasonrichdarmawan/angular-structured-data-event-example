import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/events'
  },

  /**
   * @todo: Angular 14 standalone component
   */
  {
    path: '',
    loadChildren: () => import("./presentation/pages/event-page/event-page.module").then(m => m.EventPageModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventFeatureRoutingModule { }
