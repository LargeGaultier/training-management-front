import { Action, State, StateContext } from '@ngxs/store';
import { Layout, Sidenav } from './layout.actions';
import { LayoutBreakpoints } from './layout.model';

export interface LayoutModel {
  isSidenavOpened: boolean;
  currentLayoutBreakpoint: LayoutBreakpoints;
}

@State<LayoutModel>({
  name: 'layout',
  defaults: {
    isSidenavOpened: true,
    currentLayoutBreakpoint: LayoutBreakpoints.Large
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

  @Action(Layout.SetBreakpoint)
  setBreakpoint(
    { patchState }: StateContext<LayoutModel>,
    { payload }: Layout.SetBreakpoint
  ) {
    patchState({
      currentLayoutBreakpoint: payload
    });
  }
}
