import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CoursePage } from './course/course.page';
import { CourseService } from './course/providers/course.service';
import { TrainingCenterRoutingModule } from './training-center-routing.module';
import { TrainingCenterPage } from './training-center.page';

@NgModule({
  declarations: [TrainingCenterPage, CoursePage],
  imports: [CommonModule, TrainingCenterRoutingModule],
  providers: [CourseService]
})
export class TrainingCenterModule {}
