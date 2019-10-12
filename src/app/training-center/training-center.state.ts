import { Action, State, StateContext } from '@ngxs/store';
import { RefBlock } from '../models/refBlock.model';
import { CourseService } from './course/providers/course.service';
import { GetRefBlocks } from './training-center.actions';

export interface TrainingCenterModel {
  loading: boolean;
  refBlocks: RefBlock[];
}

@State<TrainingCenterModel>({
  name: 'training-center',
  defaults: {
    loading: false,
    refBlocks: []
  }
})
export class TrainingCenterState {
  constructor(private courseService: CourseService) {}
  @Action(GetRefBlocks)
  getRefBlocks({ patchState }: StateContext<TrainingCenterModel>) {
    patchState({ loading: true });
    return this.courseService.getRefBlocks(0).pipe();
  }
}
