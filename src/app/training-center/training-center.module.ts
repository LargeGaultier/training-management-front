import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AngularMaterialModule } from '../angular-material.module';
import { TrainingCenterRoutingModule } from './training-center-routing.module';
import { TrainingCenterPage } from './training-center.page';

@NgModule({
  declarations: [TrainingCenterPage],
  imports: [CommonModule, TrainingCenterRoutingModule, AngularMaterialModule]
})
export class TrainingCenterModule {}
