import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { RefBlock } from '../../models/refBlock.model';
import { GetRefBlocks } from '../training-center.actions';
import { CourseService } from './providers/course.service';

@Component({
  selector: 'trm-course',
  templateUrl: './course.page.html',
  styleUrls: ['./course.page.scss']
})
export class CoursePage implements OnInit {
  @Select() refBlocks$: Observable<RefBlock[]>;
  @Select() loadingRefBlocks$: Observable<boolean>;
  @Select() isloadingRefBlocksFailed$: Observable<boolean>;

  constructor(private store: Store, private courseService: CourseService) {}

  ngOnInit() {
    this.store.dispatch(GetRefBlocks);
  }
}
