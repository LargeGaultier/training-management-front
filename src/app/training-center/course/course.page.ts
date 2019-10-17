import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { GetRefBlocks, RefDegrees } from '../training-center.actions';
import {
  TrainingCenterModel,
  TrainingCenterState
} from '../training-center.state';

@Component({
  selector: 'edx-course',
  templateUrl: './course.page.html',
  styleUrls: ['./course.page.scss']
})
export class CoursePage implements OnInit {
  @Select(TrainingCenterState) trainingCenterState$: Observable<
    TrainingCenterModel
  >;

  constructor(private store: Store) {}

  ngOnInit() {
    this.store.dispatch([GetRefBlocks, RefDegrees.Get]);
  }
}
