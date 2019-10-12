import { Action, State, StateContext } from '@ngxs/store';
import { catchError, tap } from 'rxjs/operators';
import { RefBlock } from '../models/refBlock.model';
import { CourseService } from './course/providers/course.service';
import {
  GetRefBlocks,
  GetRefBlocksFail,
  GetRefBlocksSuccess
} from './training-center.actions';

export interface TrainingCenterModel {
  loadingRefBlocks: boolean;
  refBlocks: RefBlock[];
  isloadingRefBlocksFailed: boolean;
}

@State<TrainingCenterModel>({
  name: 'trainingCenter',
  defaults: {
    loadingRefBlocks: true,
    refBlocks: [],
    isloadingRefBlocksFailed: false
  }
})
export class TrainingCenterState {
  constructor(private courseService: CourseService) {}

  @Action(GetRefBlocks)
  getRefBlocks({ dispatch, patchState }: StateContext<TrainingCenterModel>) {
    patchState({ loadingRefBlocks: true });
    return this.courseService
      .getRefBlocks(0)
      .pipe(
        tap(
          res => dispatch(new GetRefBlocksSuccess(res)),
          catchError(() => dispatch(GetRefBlocksFail))
        )
      );
  }

  @Action(GetRefBlocksSuccess)
  getRefBlocksSuccess(
    { patchState }: StateContext<TrainingCenterModel>,
    { payload }: GetRefBlocksSuccess
  ) {
    patchState({
      loadingRefBlocks: false,
      isloadingRefBlocksFailed: false,
      refBlocks: payload
    });
  }

  @Action(GetRefBlocksFail)
  getRefBlockFail({ patchState }: StateContext<TrainingCenterModel>) {
    patchState({ loadingRefBlocks: false, isloadingRefBlocksFailed: true });
  }
}
