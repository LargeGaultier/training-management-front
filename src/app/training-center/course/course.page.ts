import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { GetRefBlocks } from '../training-center.actions';
import {
  TrainingCenterModel,
  TrainingCenterState
} from '../training-center.state';

@Component({
  selector: 'trm-course',
  templateUrl: './course.page.html',
  styleUrls: ['./course.page.scss']
})
export class CoursePage implements OnInit {
  @Select(TrainingCenterState) trainingCenterState$: Observable<
    TrainingCenterModel
  >;

  constructor(private store: Store) {}

  ngOnInit() {
    this.store.dispatch(GetRefBlocks);
  }
}
