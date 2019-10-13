import { Action, State, StateContext } from '@ngxs/store';
import { catchError, tap } from 'rxjs/operators';
import { RefBlock } from '../models/refBlock.model';
import { RefDegree } from '../models/refDegree.model';
import { CourseService } from './course/providers/course.service';
import {
  GetRefBlocks,
  GetRefBlocksFail,
  GetRefBlocksSuccess,
  RefDegrees,
  SelectRefBlock
} from './training-center.actions';

export interface TrainingCenterModel {
  loadingRefBlocks: boolean;
  refBlocks: RefBlock[];
  isloadingRefBlocksFailed: boolean;
  selectedRefBlock: RefBlock;
  refDegrees: RefDegree[];
}

@State<TrainingCenterModel>({
  name: 'trainingCenter',
  defaults: {
    loadingRefBlocks: true,
    refBlocks: [],
    isloadingRefBlocksFailed: false,
    selectedRefBlock: null,
    refDegrees: []
  }
})
export class TrainingCenterState {
  constructor(private courseService: CourseService) {}

  @Action(GetRefBlocks)
  getRefBlocks({ dispatch, patchState }: StateContext<TrainingCenterModel>) {
    patchState({
      loadingRefBlocks: true,
      refBlocks: [],
      selectedRefBlock: null
    });
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

  @Action(SelectRefBlock)
  selectRefBlock(
    { patchState }: StateContext<TrainingCenterModel>,
    { payload }: SelectRefBlock
  ) {
    patchState({ selectedRefBlock: payload });
  }

  @Action(RefDegrees.Get)
  getRefDegrees({ dispatch, patchState }: StateContext<TrainingCenterModel>) {
    patchState({
      loadingRefBlocks: true,
      refBlocks: [],
      selectedRefBlock: null
    });
    return this.courseService
      .getRefDegrees(0)
      .pipe(
        tap(
          res => dispatch(new RefDegrees.GetSuccess(res)),
          catchError(() => dispatch(RefDegrees.GetFail))
        )
      );
  }

  @Action(RefDegrees.GetSuccess)
  getRefDegreesSuccess(
    { patchState }: StateContext<TrainingCenterModel>,
    { payload }: RefDegrees.GetSuccess
  ) {
    patchState({
      refDegrees: payload
    });
  }
}
