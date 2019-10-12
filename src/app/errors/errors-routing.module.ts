import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundPage } from './not-found-page/not-found.page';

const routes: Routes = [
  {
    path: 'errors',
    children: [
      {
        path: '404',
        component: NotFoundPage
      }
    ]
  },
  { path: '**', redirectTo: '/errors/404' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ErrorsRoutingModule {}
