import { Action, State, StateContext } from '@ngxs/store';
import { Sidenav } from './layout.actions';

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
  @Action(Sidenav.Toggle)
  toggleSidenav({ patchState, getState }: StateContext<LayoutModel>) {
    const state = getState();
    patchState({
      isSidenavOpened: !state.isSidenavOpened
    });
  }
  @Action(Sidenav.Open)
  openSidenav({ patchState, getState }: StateContext<LayoutModel>) {
    const state = getState();
    patchState({
      isSidenavOpened: true
    });
  }
  @Action(Sidenav.Close)
  closeSidenav({ patchState, getState }: StateContext<LayoutModel>) {
    const state = getState();
    patchState({
      isSidenavOpened: false
    });
  }
}
