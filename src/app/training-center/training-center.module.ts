import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { AngularMaterialModule } from '../angular-material.module';
import { CoursePage } from './course/course.page';
import { CourseService } from './course/providers/course.service';
import { TrainingCenterRoutingModule } from './training-center-routing.module';
import { TrainingCenterPage } from './training-center.page';
import { TrainingCenterState } from './training-center.state';

@NgModule({
  declarations: [TrainingCenterPage, CoursePage],
  imports: [
    CommonModule,
    NgxsModule.forFeature([TrainingCenterState]),
    TrainingCenterRoutingModule,
    AngularMaterialModule
  ],
  providers: [CourseService]
})
export class TrainingCenterModule {}
