import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth/auth.guard';
import { TrainingCenterPage } from './training-center.page';

const routes: Routes = [
  { path: '', canActivate: [AuthGuard], component: TrainingCenterPage }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrainingCenterRoutingModule {}
