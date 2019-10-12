import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AngularMaterialModule } from '../angular-material.module';
import { CoursePage } from './course/course.page';
import { CourseService } from './course/providers/course.service';
import { TrainingCenterRoutingModule } from './training-center-routing.module';
import { TrainingCenterPage } from './training-center.page';

@NgModule({
  declarations: [TrainingCenterPage, CoursePage],
  imports: [CommonModule, TrainingCenterRoutingModule, AngularMaterialModule],
  providers: [CourseService]
})
export class TrainingCenterModule {}
