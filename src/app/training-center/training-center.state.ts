import { Action, State, StateContext } from '@ngxs/store';
import { catchError, tap } from 'rxjs/operators';
import { RefBlock } from '../models/refBlock.model';
import { CourseService } from './course/providers/course.service';
import {
  GetRefBlocks,
  GetRefBlocksFail,
  GetRefBlocksSuccess,
  SelectRefBlock
} from './training-center.actions';

export interface TrainingCenterModel {
  loadingRefBlocks: boolean;
  refBlocks: RefBlock[];
  isloadingRefBlocksFailed: boolean;
  selectedRefBlock: RefBlock;
}

@State<TrainingCenterModel>({
  name: 'trainingCenter',
  defaults: {
    loadingRefBlocks: true,
    refBlocks: [],
    isloadingRefBlocksFailed: false,
    selectedRefBlock: null
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
}
