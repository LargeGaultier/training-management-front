import { Action, State, StateContext } from '@ngxs/store';
import { ToggleSidnav } from './layout.actions';

export interface LayoutModel {
  isSidenavOpened: boolean;
}

@State<LayoutModel>({
  name: 'layout',
  defaults: {
    isSidenavOpened: true
  }
})
export class LayoutState {
  @Action(ToggleSidnav)
  getRefBlocksSuccess({ patchState, getState }: StateContext<LayoutModel>) {
    const state = getState();
    patchState({
      isSidenavOpened: !state.isSidenavOpened
    });
  }
}
