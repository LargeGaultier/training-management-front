import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TrainingCenterRoutingModule } from './training-center-routing.module';
import { TrainingCenterPage } from './training-center.page';

@NgModule({
  declarations: [TrainingCenterPage],
  imports: [CommonModule, TrainingCenterRoutingModule]
})
export class TrainingCenterModule {}
