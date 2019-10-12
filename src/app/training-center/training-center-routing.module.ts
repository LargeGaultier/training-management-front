import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth/auth.guard';
import { CoursePage } from './course/course.page';
import { TrainingCenterPage } from './training-center.page';

const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    component: TrainingCenterPage,
    children: [
      {
        path: 'courses',
        component: CoursePage
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrainingCenterRoutingModule {}
