import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPage } from './auth/login-page/login.page';

const routes: Routes = [
  { path: '', redirectTo: 'training-center', pathMatch: 'full' },
  {
    path: 'training-center',
    loadChildren:
      './training-center/training-center.module#TrainingCenterModule'
  },
  { path: 'login', component: LoginPage }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
