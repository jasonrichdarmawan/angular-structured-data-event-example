import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { routes as eventRoutes } from 'projects/features/event/src/app/app-routing.module'

const routes: Routes = [
  ...eventRoutes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
